<?php

use App\Http\Controllers\API\QuestionsController;
use App\Http\Controllers\API\SubjectsController;
use App\Http\Resources\SubjectCollection;
use App\Subject;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:api'])->group(function () {
    Route::get('/subjects', 'API\SubjectsController@index');
    Route::get('/questions/bookmarks', 'API\QuestionsController@getBookmarks');
    Route::get('/questions/answers', 'API\QuestionsController@answers');
    Route::apiResource('/questions', 'API\QuestionsController');
    Route::post(
        '/questions/{question}/bookmark',
        'API\QuestionsController@bookmarkQuestion'
    );
    Route::delete(
        '/questions/{question}/unbookmark',
        'API\QuestionsController@unbookmarkQuestion'
    );
    Route::post(
        '/questions/{question}/answer',
        'API\QuestionsController@createAnswer'
    );
});
