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

Route::get('/', 'HomeController')
    ->name('home')
    ->middleware(['guest']);


Route::get('/dashboard', 'DashboardController')
    ->name('dashboard')
    ->middleware(['auth']);

Route::view('questions/{path?}', 'questions')->name('questions.index');
Route::get('lists', 'ListsController@index')->name('lists.index');
