<?php

namespace App\Http\Controllers;

use App\Question;
use App\QuestionList;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller {
    public function __invoke() {
        $user = User::findOrFail(Auth::id());

        return view('dashboard')->with([
            'totalQuestions' => Question::all()->count(),
            'totalMyQuestions' => $user->myQuestions()->count(),
            'totalQuestionsBookmarks' => $user->bookmarkedQuestions()->count(),
            'totalLists' => QuestionList::all()->count(),
            'totalMyLists' => $user->myLists()->count(),
            'totalListsBookmarks' => $user->bookmarkedLists()->count()
        ]);
    }
}
