<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateListRequest;
use App\Http\Resources\ListResource;
use App\QuestionList;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ListsController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     *
     */

    public const RECORDS_PER_PAGE = 5;

    public function index() {
        return ListResource::collection(
            QuestionList::paginate(self::RECORDS_PER_PAGE)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  \App\QuestionList  $questionList
     * @return \Illuminate\Http\Response
     */
    public function show(QuestionList $list) {
        return new ListResource($list);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\QuestionList  $questionList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, QuestionList $questionList) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\QuestionList  $questionList
     * @return \Illuminate\Http\Response
     */
    public function destroy(QuestionList $questionList) {
        //
    }
}
