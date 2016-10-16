// Importer la class Input pour des variables du composant parent de la directive
import { Component, Input } from '@angular/core';
//importation du modèle
import { TaskItem } from "../models/task.item";

// Configurer la directive
@Component({
    selector: 'single-item',
    template: `
        <p>{{item.content}}<p>
        <hr>
    `
})

// Exporter la class de la directive
export class SingleItem{

    // Appeler la fonction @Input() pour charger une variable d'un composant parent
    @Input() item: TaskItem;
}
