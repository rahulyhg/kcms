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
    'uses' => 'AngularControllers\AngularRoutesController@index',
    'as' => 'home'
]);

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

// Authentication route
Route::post('auth/login', 'Auth\JwtAuthenticateController@authenticate');

// API route group that we need to protect
// User Manager for Administrators
Route::group(['prefix' => 'api', 'middleware' => ['role:admin']], function()
{
    Route::get('users', 'Auth\JwtAuthenticateController@index');
    Route::post('role', 'Auth\JwtAuthenticateController@createRole');
    Route::post('permission', 'Auth\JwtAuthenticateController@createPermission');
    Route::post('assign-role', 'Auth\JwtAuthenticateController@assignRole');
    Route::post('attach-permission', 'Auth\JwtAuthenticateController@attachPermission');
    Route::post('check', 'Auth\JwtAuthenticateController@checkRoles');
});
//Normal ability for normal users
Route::group(['prefix' => 'api', 'middleware' => ['role:admin|user']], function() {
    Route::get('tasks', 'ModelControllers\TaskController@getAllTasks');
    Route::get('task/{id}', 'ModelControllers\TaskController@viewTask');
    Route::post('task', 'ModelControllers\TaskController@createTask');
    Route::put('task/{id}', 'ModelControllers\TaskController@editTask');
    Route::delete('task/{id}', ['middleware' => ['ability:admin,delete-tasks'], 'uses' => 'ModelControllers\TaskController@deleteTask']);
});