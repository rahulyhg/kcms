<?php
namespace App\Http\Controllers;
use App\Permission;
use App\Role;
use App\User;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Log;
class JwtAuthenticateController extends Controller
{
    
    public function index()
    {
        return response()->json(['auth'=>Auth::user(), 'users'=>User::all()]);
    }
    
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        // if no errors are encountered we can return a JWT
        return response()->json(compact('token'));
    }
    public function createRole(Request $request){
        $role = new Role();
        $role->name = $request->input('name');
        $role->display_name  = $request->input('display_name');
        $role->description  = $request->input('description');
        $role->save();
        return response()->json("role created");
    }
    public function createPermission(Request $request){
        $viewUsers = new Permission();
        $viewUsers->name = $request->input('name');
        $viewUsers->display_name  = $request->input('display_name');
        $viewUsers->description  = $request->input('description');
        $viewUsers->save();
        return response()->json("permission created");
    }
    public function assignRole(Request $request){
        $user = User::where('email', '=', $request->input('email'))->first();
        $role = Role::where('name', '=', $request->input('role'))->first();
        //$user->attachRole($request->input('role'));
        $user->roles()->attach($role->id);
        return response()->json("role assigned");
    }
    public function attachPermission(Request $request){
        $role = Role::where('name', '=', $request->input('role'))->first();
        $permission = Permission::where('name', '=', $request->input('name'))->first();
        $role->attachPermission($permission);
        return response()->json("permission attach");
    }
    public function checkRoles(Request $request){
        $user = User::where('email', '=', $request->input('email'))->first();
        Log::info($user);
        return response()->json([
            "user" => $user,
            "owner" => $user->hasRole('owner'),
            "admin" => $user->hasRole('admin'),
            "editUser" => $user->can('edit-user'),
            "createUsers" => $user->can('create-users')
        ]);
    }
}