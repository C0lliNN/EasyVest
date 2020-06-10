<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateQuestionRequest;
use App\Http\Resources\Question as ResourcesQuestion;
use App\Http\Resources\QuestionsCollection;
use App\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class QuestionsController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $query = request()->query('query');

        if ($query) {
            $queryBuilder = Question::with('subject')
                ->with('relations')
                ->where('content', 'LIKE', "%{$query}%")
                ->orWhere('tags', 'LIKE', "%{$query}%");
        } else {
            $queryBuilder = Auth::user()
                ->myQuestions()
                ->with('relations')
                ->with('subject');
        }

        return $queryBuilder->paginate(2);
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
            Auth::user()
                ->myQuestions()
                ->detach($question->id);
            $question->delete();
            return response('success', 200);
        }

        return response('', 401);
    }

    public function getBookmarks() {
        return Auth::user()
            ->bookmarks()
            ->with('relations')
            ->with('subject')
            ->paginate(2);
    }

    public function bookmarkQuestion(Question $question) {
        $question->users()->attach(Auth::id(), ['relation' => 'bookmark']);

        return response('success', 200);
    }

    public function unbookmarkQuestion(Question $question) {
        Auth::user()
            ->bookmarks()
            ->detach($question->id);
        return response('success', 200);
    }
}
