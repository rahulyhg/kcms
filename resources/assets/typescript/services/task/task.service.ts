import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('TaskService Started');
    }

    getTasks(){
        return this.http.get('api/tasks')
            .map(res => res.json());
    }

    addTask(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/task', JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }

    deleteTask(id){
        return this.http.delete('api/task/' + id)
            .map(res => res.json());
    }

    updateTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/task/' + task.id, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
}