// Importer la class Input pour des variables du composant parent de la directive
import { Component } from '@angular/core';
//importation du modèle
import { TaskItem } from "../models/task.item";
//importation du service
import { TaskService } from "../services/tasks.service";

// Configurer la directive
@Component({
    selector: 'add-task',
    templateUrl: 'app/partials/directives/add.task.dir.html',
})

// Exporter la class de la directive
export class AddTask{

    private newTask: TaskItem;

    constructor(
        private taskService: TaskService
    ){
        this.resetInput(); //on initialise la variable
    };

    addNewTask(event: Event){
        if(this.newTask.content.length>0){
            this.taskService.addNewTask(this.newTask);
            this.resetInput();
        }
    }
    
    resetInput():void{
        this.newTask = new TaskItem({content:""});
    }
}
