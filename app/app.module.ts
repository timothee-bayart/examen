import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

//routing
import { Router } from './app.routing';

//Importer le service
import { TaskService }  from './services/tasks.service';

// Importer les composants de chaque page
import { ToDoComponent }  from './components/ToDoComponent';
import { ToDoArchiveComponent }  from './components/ToDoArchiveComponent';
import { SingleItem }  from './directives/single.item';
import { AddTask }  from './directives/add.task';

import { AppComponent }  from './app.component';


@NgModule({
  imports: [ BrowserModule, FormsModule, Router ],
  declarations: [ AppComponent, ToDoComponent, ToDoArchiveComponent, 
    SingleItem, AddTask], //déclaration des composants et directives
  bootstrap: [ AppComponent ]
})
export class AppModule { }
