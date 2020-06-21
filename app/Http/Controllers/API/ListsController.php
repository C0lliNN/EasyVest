<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateListRequest;
use App\Http\Resources\ListResource;
use App\QuestionList;
use App\User;
use Illuminate\Support\Facades\Auth;

class ListsController extends Controller {
    public const RECORDS_PER_PAGE = 5;

    public function index() {
        $query = request()->query('query');

        if ($query) {
            $lists = QuestionList::query()
                ->where('title', 'LIKE', "%{$query}%")
                ->orWhere('description', 'LIKE', "%{$query}%")
                ->orWhere('tags', 'LIKE', "{$query}");
        } else {
            $user = User::findOrFail(Auth::id());
            $lists = $user->myLists();
        }

        return ListResource::collection(
            $lists->paginate(self::RECORDS_PER_PAGE)
        );
    }

    public function store(CreateListRequest $request) {
        $list = QuestionList::create([
            'title' => $request->title,
            'description' => $request->description,
            'tags' => $request->tags,
            'subject_id' => $request->subject
        ]);

        $list->questions()->attach($request->questions);

        $user = User::findOrFail(Auth::id());

        $user->myLists()->attach($list->id, ['relation' => 'owner']);

        return response(200);
    }

    public function show(QuestionList $list) {
        return new ListResource($list);
    }

    public function update(CreateListRequest $request, QuestionList $list) {
        if ($list->owner[0]->id === Auth::id()) {
            $list->update([
                'title' => $request->title,
                'description' => $request->description,
                'tags' => $request->tags,
                'subject_id' => $request->subject
            ]);

            $list->questions()->sync($request->questions);

            return response(200);
        }

        return response(401);
    }

    public function destroy(QuestionList $list) {
        if ($list->owner[0]->id === Auth::id()) {
            $user = User::findOrFail(Auth::id());
            $list->questions()->detach();
            $user->myLists()->detach($list->id);
            $list->delete();
            return response(200);
        }
        return response(401);
    }

    public function bookmark($listId) {
        $user = User::findOrFail(Auth::id());
        $user->bookmarkedLists()->attach($listId, ['relation' => 'bookmark']);
        return response(200);
    }

    public function unbookmark($listId) {
        $user = User::findOrFail(Auth::id());
        $user->bookmarkedLists()->detach($listId);
        return response(200);
    }

    public function bookmarks() {
        $user = User::findOrFail(Auth::id());
        return ListResource::collection(
            $user->bookmarkedLists()->paginate(self::RECORDS_PER_PAGE)
        );
    }

    public function answers() {
        $user = User::findOrFail(Auth::id());
        return ListResource::collection(
            $user->answeredQuestions()->paginate(self::RECORDS_PER_PAGE)
        );
    }
}
