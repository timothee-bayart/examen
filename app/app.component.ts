import { Component , OnInit} from '@angular/core';
//importation du service
import { TaskService } from "./services/tasks.service";
//importation du modèle
import { TaskItem } from "./models/task.item";

@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
    providers:[TaskService]
})

export class AppComponent {
    private collectionTodo: TaskItem[];
    private collectionArchive: TaskItem[];
    
    constructor( 
        private taskService: TaskService
    ){};

    ngOnInit(): void {
        //get tasks for the view
        this.taskService.getTasksTodo().then(tasks => this.collectionTodo = tasks);
        this.taskService.getTasksTodoArchive().then(tasks => this.collectionArchive = tasks);
    }
}
