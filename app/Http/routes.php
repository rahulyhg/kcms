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

// Route::group(['middleware' => ['web']], function () {
//     //
// });

// API route group that we need to protect
// User Manager for Administrators
Route::group(['prefix' => 'api', 'middleware' => ['role:admin']], function()
{
    // List users
    Route::get('users', 'JwtAuthenticateController@index');
    // Route to create a new role
    Route::post('role', 'JwtAuthenticateController@createRole');
    // Route to create a new permission
    Route::post('permission', 'JwtAuthenticateController@createPermission');
    // Route to assign role to user
    Route::post('assign-role', 'JwtAuthenticateController@assignRole');
    // Route to attache permission to a role
    Route::post('attach-permission', 'JwtAuthenticateController@attachPermission');
    // Route to check role
    Route::post('check', 'JwtAuthenticateController@checkRoles');
});
//Normal ability for normal users
Route::group(['prefix' => 'api', 'middleware' => ['role:admin|user']], function() {
    Route::get('tasks', 'ModelControllers\TaskController@getAllTasks');
    Route::get('task/{id}', 'ModelControllers\TaskController@viewTask');
    Route::post('task', 'ModelControllers\TaskController@createTask');
    Route::put('task/{id}', 'ModelControllers\TaskController@editTask');
    Route::delete('task/{id}', ['middleware' => ['permission:delete-tasks'], 'uses' => 'ModelControllers\TaskController@deleteTask']);
});
// Authentication route
Route::post('auth/login', 'JwtAuthenticateController@authenticate');