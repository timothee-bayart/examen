import { Component, OnInit} from '@angular/core';
//importation du service
import { TaskService } from "../services/tasks.service";
//importation du modèle
import { TaskItem } from "../models/task.item";


@Component({
    selector: 'todo-page',
    styles: [`h1{font-size:1.5rem`],
    templateUrl: 'app/partials/components/todo.component.html',
    providers:[TaskService]
})


export class ToDoComponent implements OnInit{

    private collection: TaskItem[];
    
    constructor( 
        private taskService: TaskService
    ){};

    ngOnInit(): void {
        //get tasks for the view
        this.taskService.getTasksTodo().then(tasks => this.collection = tasks);
    }
}
