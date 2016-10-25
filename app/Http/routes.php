<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/{any?}', [
    'uses' => 'ExampleControllers\AngularRoutesController@index',
    'as' => 'home'
]);

// API route
Route::post('/api/upload-file', 'ExampleControllers\UploadController@uploadFile');

// Task API
Route::get('/api/tasks', 'ModelControllers\TaskController@getAllTasks');
Route::get('/api/task/{id}', 'ModelControllers\TaskController@viewTask');
Route::post('/api/task', 'ModelControllers\TaskController@createTask');
Route::put('/api/task/{id}', 'ModelControllers\TaskController@editTask');
Route::delete('/api/task/{id}', 'ModelControllers\TaskController@deleteTask');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
