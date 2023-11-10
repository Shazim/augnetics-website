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

Route::get('/', function () {
    // return view('welcome');
    return view('home.landing-page');
});

Route::get('/quiz', 'QuizController@index');
Route::get('/3d', function () {
    return view('home.3d');
});

Route::namespace('Home')->group(function () {
    Route::prefix('home')->group(function () {
        Route::post('/contact-us', 'HomeController@contactUs')->name('home.contact-us');
    });
});
