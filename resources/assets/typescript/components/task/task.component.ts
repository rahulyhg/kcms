import { Component } from '@angular/core';
import { ToastService } from '../../services/ui/toast.service';
import { TaskService } from '../../services/task/task.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { Task } from '../../models/Task';

@Component({
    selector: 'tasks',
    template: require('./task.template.html'),
    providers: [TaskService, ToastService, SlimLoadingBarService]
})
export class TaskComponent {
    tasks: Task[];
    title: string;

    constructor(
                private toastService: ToastService,
                private slimLoadingBarService: SlimLoadingBarService,
                private taskService:TaskService){
        this.slimLoadingBarService.start();
        this.taskService.getTasks()
            .subscribe(
                data => {this.tasks = data.tasks},
                err => {
                        this.toastService.showToast('error', 'System Error', err, true, 3000);
                        this.slimLoadingBarService.complete();
                },
                () => this.slimLoadingBarService.complete()
            );
    }

    addTask(event){
        this.slimLoadingBarService.start();
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(newTask)
            .subscribe(
                data => {
                    if(data.error === null){
                        this.tasks.push(data.task);
                        this.toastService.showToast('success', data.message, '', true, 3000);
                        this.title = '';
                    }else{
                        this.toastService.showToast('error', data.message, '', true, 3000);
                    }
                },
                err => {
                        this.toastService.showToast('error', 'System Error', err, true, 3000);
                        this.slimLoadingBarService.complete();
                },
                () => this.slimLoadingBarService.complete()
            );
    }

    deleteTask(id){
        this.slimLoadingBarService.start();
        var tasks = this.tasks;
        this.taskService.deleteTask(id)
            .subscribe(
                data => {
                    if(data.deletedId == id && data.deletedId>0){
                        this.toastService.showToast('success', data.message, '', true, 3000);
                        for (var i = 0; i < tasks.length; i++) {
                            if(tasks[i].id == id){
                                tasks.splice(i, 1);
                            }
                        }
                    }else{
                        this.toastService.showToast('warning', data.message, '', true, 3000);
                    }
                },
                err => {
                        this.toastService.showToast('error', 'System Error', err, true, 3000);
                        this.slimLoadingBarService.complete();
                },
                () => this.slimLoadingBarService.complete()
            );
    }

    updateStatus(task){
        this.slimLoadingBarService.start();
        var _task = {
            id: task.id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateTask(_task)
            .subscribe(
                data => {
                    task.isDone = _task.isDone;
                    this.toastService.showToast('info', data.message, '', true, 2000);
                },
                err => {
                        this.toastService.showToast('error', 'System Error', err, true, 3000);
                        this.slimLoadingBarService.complete();
                },
                () => this.slimLoadingBarService.complete()
            );
    }
}