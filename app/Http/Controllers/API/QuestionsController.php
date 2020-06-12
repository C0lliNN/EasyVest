<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateQuestionRequest;
use App\Http\Resources\Question as ResourcesQuestion;
use App\Question;
use App\User;
use Illuminate\Support\Facades\Auth;

class QuestionsController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    const RECORDS_PER_PAGE = 5;

    public function index() {
        $query = request()->query('query');

        if ($query) {
            $queryBuilder = Question::with('subject')
                ->with('relations')
                ->where('content', 'LIKE', "%{$query}%")
                ->orWhere('tags', 'LIKE', "%{$query}%");
        } else {
            $user = User::findOrFail(Auth::id());
            $queryBuilder = $user
                ->myQuestions()
                ->with('relations')
                ->with('subject');
        }

        return $queryBuilder->paginate(self::RECORDS_PER_PAGE);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateQuestionRequest $request) {
        $question = Question::create([
            'content' => $request->content,
            'alternativeA' => $request->alternativeA,
            'alternativeB' => $request->alternativeB,
            'alternativeC' => $request->alternativeC,
            'alternativeD' => $request->alternativeD,
            'alternativeE' => $request->alternativeE,
            'subject_id' => $request->subject,
            'correctAlternative' => $request->correctAlternative,
            'tags' => implode(', ', $request->tags)
        ]);

        $question->users()->attach(Auth::id(), ['relation' => 'owner']);

        return response('success', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question) {
        return new ResourcesQuestion($question);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CreateQuestionRequest $request, Question $question) {
        if ($question->user_id === Auth::id()) {
            $question->update([
                'content' => $request->content,
                'alternativeA' => $request->alternativeA,
                'alternativeB' => $request->alternativeB,
                'alternativeC' => $request->alternativeC,
                'alternativeD' => $request->alternativeD,
                'alternativeE' => $request->alternativeE,
                'subject_id' => $request->subject,
                'correctAlternative' => $request->correctAlternative,
                'tags' => implode(', ', $request->tags)
            ]);

            return response('success', 200);
        }

        return response('', 401);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question) {
        if ($question->owner()->firstOrFail()->id === Auth::id()) {
            $user = User::findOrFail(Auth::id());
            $user->myQuestions()->detach($question->id);
            $question->delete();
            return response('success', 200);
        }

        return response('', 401);
    }

    public function getBookmarks() {
        $user = User::findOrFail(Auth::id());
        return $user
            ->bookmarks()
            ->with('relations')
            ->with('subject')
            ->paginate(self::RECORDS_PER_PAGE);
    }

    public function bookmarkQuestion(Question $question) {
        $question->users()->attach(Auth::id(), ['relation' => 'bookmark']);

        return response('success', 200);
    }

    public function unbookmarkQuestion(Question $question) {
        $user = User::findOrFail(Auth::id());
        $user->bookmarks()->detach($question->id);
        return response('success', 200);
    }

    public function createAnswer(Question $question) {
        $user = User::findOrFail(Auth::id());
        if (
            $user
                ->answers()
                ->wherePivot('question_id', $question->id)
                ->count() == 0
        ) {
            $question->users()->attach(Auth::id(), ['relation' => 'answer']);
            return response('success', 200);
        }

        return response('Question already Answered', 400);
    }

    public function answers() {
        $user = User::findOrFail(Auth::id());
        return $user
            ->answers()
            ->with('relations')
            ->with('subject')
            ->paginate(self::RECORDS_PER_PAGE);
    }
}
