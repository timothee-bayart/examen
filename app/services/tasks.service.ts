import { Injectable } from '@angular/core';
import { TaskItem } from "../models/task.item";

//On définit les collections avec les tâches en utilisant notre modele de donnée
const COLLECTION_TODO:any[] = [
    new TaskItem({id:1, content:"Ranger ma chambre", status:0}),
    new TaskItem({id:2, content:"Faire la vaisselle", status:0}),
    new TaskItem({id:3, content:"Sortir le chien", status:0})
];

const COLLECTION_TODO_ARCHIVE:any[] = [
    new TaskItem({id:1, content:"Faire mes devoirs", status:1}),
    new TaskItem({id:2, content:"Faire les courses", status:1})
];

//on rend disponible le service
@Injectable()
//exporte la classe
export class TaskService {

    getTasksTodo(): Promise<TaskItem[]> {
        return Promise.resolve(COLLECTION_TODO);
    }
};