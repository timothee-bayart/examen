import { Component, OnInit, Output, Input } from '@angular/core';
//importation du service
import { TaskService } from "../services/tasks.service";
//importation du modèle
import { TaskItem } from "../models/task.item";


@Component({
    selector: 'todo-archive-page',
    styles: [`h1{font-size:1.5rem`],
    templateUrl: 'app/partials/components/todo.archive.component.html',
    providers:[TaskService]
})


export class ToDoArchiveComponent implements OnInit{

    private collection: TaskItem[];
    
    constructor( 
        private taskService: TaskService
    ){};

    ngOnInit(): void {
        //get tasks for the view
        this.taskService.getTasksTodoArchive().then(tasks => this.collection = tasks);
    }
}
