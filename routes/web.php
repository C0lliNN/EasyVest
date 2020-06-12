<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::view('/', 'home')
    ->name('home')
    ->middleware(['guest']);

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', 'DashboardController')->name('dashboard');
    Route::get('my-profile', 'UsersController@myProfile')->name('my-profile');
    Route::put('my-profile', 'UsersController@update')->name(
        'my-profile.update'
    );
    Route::get('/profile/{user}', 'UsersController@showProfile')->name(
        'profile.show'
    );
    Route::view('questions/{path?}', 'questions')->name('questions');
    Route::view('questions/{path?}/{path2?}', 'questions')->name('questions');
    Route::view('lists/{path?}', 'lists')->name('lists');
});
