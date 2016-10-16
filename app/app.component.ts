import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <nav>
            <a routerLink="/toDo">Tâches à faire</a>
            <a routerLink="/toDoArchive">Archives</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
