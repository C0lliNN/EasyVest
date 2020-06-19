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
        if (request()->query('listBuilder')) {
            return $this->indexForListBuilder();
        }

        $query = request()->query('query');

        if ($query) {
            $questions = Question::query()
                ->where('content', 'LIKE', "%{$query}%")
                ->orWhere('tags', 'LIKE', "%{$query}%");
        } else {
            $user = User::findOrFail(Auth::id());
            $questions = $user->myQuestions();
        }

        return ResourcesQuestion::collection(
            $questions->paginate(self::RECORDS_PER_PAGE)
        );
    }

    /**
     * Display a listing of the resource. This method will be used to Build a list of questions
     *
     * @return \Illuminate\Http\Response
     */

    public function indexForListBuilder() {
        $user = User::findOrFail(Auth::id());

        $searchFrom = request()->query('searchFrom');

        switch ($searchFrom) {
            case 'all':
                $questions = Question::query();
                break;
            case 'my-questions':
                $questions = $user->myQuestions();
                break;
            case 'favorite':
                $questions = $user->bookmarkedQuestions();
                break;
            case 'answers':
                $questions = $user->answeredQuestions();
                break;
            default:
                $questions = Question::query();
        }

        $subjectId = request()->query('subject');

        $questions->where('subject_id', $subjectId);

        $tag = request()->query('tag');

        if ($tag) {
            $questions->where('tags', 'LIKE', "%{$tag}%");
        }

        $statement = request()->query('statement');

        if ($statement) {
            $questions->where('content', 'LIKE', "%{$statement}%");
        }

        return ResourcesQuestion::collection(
            $questions->paginate(self::RECORDS_PER_PAGE)
        );
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

        return response(200);
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
        if ($question->owner()->firstOrFail()->id === Auth::id()) {
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

            return response(200);
        }

        return response(401);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Question  $question
     * @return \Illuminate\Http\Response
     */

    public function destroy(Question $question) {
        if ($question->owner()->firstOrFail()->id === Auth::id()) {
            $user = User::findOrFail(Auth::id());
            $user->myQuestions()->detach($question->id);
            $question->delete();
            return response(200);
        }

        return response(401);
    }

    /**
     * Returns all questions bookmarked by the user.
     *
     * @return \Illuminate\Http\Response
     */

    public function getBookmarks() {
        $user = User::findOrFail(Auth::id());
        return ResourcesQuestion::collection(
            $user->bookmarkedQuestions()->paginate(self::RECORDS_PER_PAGE)
        );
    }

    /**
     * Adds the specified question to the users bookmarks
     *
     * @param Question $question
     * @return \Illuminate\Http\Response
     */

    public function bookmarkQuestion(Question $question) {
        $question->users()->attach(Auth::id(), ['relation' => 'bookmark']);
        return response(200);
    }

    /**
     * Removes the specified question from the users bookmarks
     *
     * @param Question $question
     * @return \Illuminate\Http\Response
     */

    public function unbookmarkQuestion(Question $question) {
        $user = User::findOrFail(Auth::id());
        $user->bookmarkedQuestions()->detach($question->id);
        return response(200);
    }

    /**
     * Registers an answer to the specific Question. A user can only answer a question once.
     *
     * @param Question $question
     * @return \Illuminate\Http\Response
     */

    public function createAnswer(Question $question) {
        $user = User::findOrFail(Auth::id());
        if (
            $user
                ->answers()
                ->wherePivot('question_id', $question->id)
                ->count() == 0
        ) {
            $question->users()->attach(Auth::id(), ['relation' => 'answer']);
            return response(200);
        }

        return response('Question already Answered', 400);
    }
    /**
     * Returns all questions answered by the user.
     *
     * @return \Illuminate\Http\Response
     */

    public function answers() {
        $user = User::findOrFail(Auth::id());
        return ResourcesQuestion::collection(
            $user->answeredQuestions()->paginate(self::RECORDS_PER_PAGE)
        );
    }
}
