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

    getTasksTodoArchive(): Promise<TaskItem[]> {
        return Promise.resolve(COLLECTION_TODO_ARCHIVE);
    }


    addNewTask(task:TaskItem):void{
        // Ajout d'un nouvel item dans la collection de données
        task.id =  COLLECTION_TODO.length+1; //on génère l'id
        COLLECTION_TODO.push(task); //on ajoute
    }

    setTaskDone(task:TaskItem):void{
        //ajouter la tache aux archives
        task.id =  COLLECTION_TODO_ARCHIVE.length+1;
        COLLECTION_TODO_ARCHIVE.push(task);

        //supprimer des taches a faire
        for(let i=0; i<COLLECTION_TODO.length; i++){
            if(COLLECTION_TODO[i].id == task.id){
                COLLECTION_TODO.splice(i, 1);
                break;
            }
        }
    }
};