import { Component, OnInit, Output, Input } from '@angular/core';
//importation du service
import { TaskService } from "../services/tasks.service";
//importation du modèle
import { TaskItem } from "../models/task.item";


@Component({
    selector: 'todo-archive-page',
    styles: [`h1{font-size:1.5rem`],
    template: `
        <h2>Archives</h2><br />
        <section *ngFor="let item of collection">
            <!-- Ajouter la directive en lui envoyant une variable -->
            <single-item [item]="item" [status]="1"></single-item>
        <section>
    `,
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
