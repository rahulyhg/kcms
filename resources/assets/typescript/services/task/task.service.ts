import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AuthService } from 'ng2-ui-auth';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
    private token: string = '';

    constructor(private auth:AuthService, private http:Http){
        console.log('TaskService Started');
        this.token = this.auth.getToken();
    }

    getTasks(){
        return this.http.get('api/tasks' + '?token=' + this.token)
            .map(res => res.json());
    }

    addTask(newTask){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/task' + '?token=' + this.token, JSON.stringify(newTask), {headers: headers})
            .map(res => res.json());
    }

    deleteTask(id){
        return this.http.delete('api/task/' + id + '?token=' + this.token)
            .map(res => res.json());
    }

    updateTask(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('api/task/' + task.id + '?token=' + this.token, JSON.stringify(task), {headers: headers})
            .map(res => res.json());
    }
}