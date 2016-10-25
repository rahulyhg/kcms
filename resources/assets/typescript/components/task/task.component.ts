import { Component, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { TaskService } from '../../services/task/task.service';
import { Task } from '../../models/Task';

@Component({
    selector: 'tasks',
    template: require('./task.template.html'),
    providers: [TaskService, MdSnackBar]
})
export class TaskComponent {
    tasks: Task[];
    title: string;

    constructor(private snackBar: MdSnackBar, 
                private viewContainerRef: ViewContainerRef,
                private taskService:TaskService){
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
            });
    }

    showMessage(message, title) {
        var config = new MdSnackBarConfig(this.viewContainerRef);
        this.snackBar.open(message, title, config);
    }

    addTask(event){
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(newTask)
            .subscribe(data => {
                if(data.error === null){
                    this.tasks.push(data.task);
                    console.log(this.tasks);
                    this.showMessage(data.message, 'Close');
                    this.title = '';
                }else{
                    this.showMessage(data.message, 'Close');
                }
            });
    }

    deleteTask(id){
        var tasks = this.tasks;
        this.taskService.deleteTask(id)
            .subscribe(data => {
                if(data.deletedId == id){
                    this.showMessage(data.message, 'Close');
                    for (var i = 0; i < tasks.length; i++) {
                        if(tasks[i].id == id){
                            tasks.splice(i, 1);
                        }
                    }
                }
            });
    }

    updateStatus(task){
        var _task = {
            id: task.id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateTask(_task)
            .subscribe(data => {
                task.isDone = _task.isDone;
                this.showMessage(data.message, 'Close');
            });
    }
}