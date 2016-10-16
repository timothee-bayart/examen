// Création d'un modèle de données pour les tâches

export class TaskItem {
    // Création des variables
    public content: string;
    public id:number;

    // Création du constructeur
    constructor(data: any){
        // Définition des variables de l'instance
        this.id = data.id;
        this.content = data.content;
    }
}