// Importer la class Input pour des variables du composant parent de la directive
import { Component, Input } from '@angular/core';
//importation du modèle
import { TaskItem } from "../models/task.item";
//importation du service
import { TaskService } from "../services/tasks.service";

// Configurer la directive
@Component({
    selector: 'single-item',
    templateUrl: 'app/partials/directives/single.item.dir.html',
})

// Exporter la class de la directive
export class SingleItem{

    constructor( 
        private taskService: TaskService
    ){};

    // Appeler la fonction @Input() pour charger une variable d'un composant parent
    @Input() item: TaskItem;
    @Input() status: number;

    setTaskDone(event: Event){
        this.taskService.setTaskDone(this.item); //on appelle la fonction du service
    }

    deleteTask(event: Event){
        this.taskService.deleteTask(this.item); //on appelle la fonction du service
    }
}
