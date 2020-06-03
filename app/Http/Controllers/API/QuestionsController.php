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

class QuestionsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $questions = DB::table('questions')
            ->join('subjects', 'questions.subject_id', '=', 'subjects.id')
            ->select('questions.id', 'questions.content', 'questions.tags', 'subjects.name as subject')
            ->get();

        return new QuestionsCollection($questions);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateQuestionRequest $request)
    {
        Question::create([
            'content' => $request->content,
            'alternativeA' => $request->alternativeA,
            'alternativeB' => $request->alternativeB,
            'alternativeC' => $request->alternativeC,
            'alternativeD' => $request->alternativeD,
            'alternativeE' => $request->alternativeE,
            'subject_id' => $request->subject,
            'user_id' => Auth::id(),
            'correctAlternative' => $request->correctAlternative,
            'tags' => implode(', ', $request->tags)
        ]);

        return response('success', 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        return new ResourcesQuestion($question);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
