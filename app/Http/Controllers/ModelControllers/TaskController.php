<?php

namespace App\Http\Controllers\ModelControllers;

use App\Task;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    //Task basic method
    public function getAllTasks(){
        $tasks = Task::all();
        return $tasks->toJson();
    }

    public function createTask(Request $request){
        $task = new Task;
        $task->isDone = false;
        if(isset($request->title) && $request->title!='') $task->title = $request->title;
        if(!isset($task->title)){
            return json_encode([
                'error' => 404,
                'message' => 'Nothing to add!'
            ]);
        }else{
            if($task->save()){
                return json_encode([
                    'error' => null,
                    'task' => $task,
                    'message' => 'Your task has been added!'
                ]);
            }else{
                return json_encode([
                    'error' => 500,
                    'message' => 'Oops something wrong...!'
                ]);
            }
        }
    }

    public function viewTask($id){
        $task = Task::find($id);
        if($task){
            return $task->toJson();
        }else{
            return json_encode([
                'message' => 'Task not found!'
            ]);
        }
        
    }

    public function editTask($id, Request $request){
        $updTask = Task::find($id);  
        if(!$updTask){
            return json_encode([
                'message' => 'Task not found!'
            ]);
        }else{
            if(isset($request->isDone)) $updTask->isDone = $request->isDone;
            if(isset($request->title) && $request->title!='') $updTask->title = $request->title;
            $updTask->save();
            if(!$updTask){
                return json_encode([
                    'message' => 'Oops something wrong...!'
                ]);
            }
            if($updTask->isDone){
                return json_encode([
                    'message' => 'Task completed!'
                ]);
            }else{
                return json_encode([
                    'message' => 'Task recovered!'
                ]);
            }
        }
    }

    public function deleteTask($id){
        Task::destroy($id);
        if(!Task::find($id)){
            return json_encode([
                'deletedId' => $id,
                'message' => 'Task has been deleted!'
            ]);
        }else{
            return json_encode([
                'deletedId' => 0,
                'message' => 'Nothing to delete!'
            ]);
        }
    }

}
