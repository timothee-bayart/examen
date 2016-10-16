import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importer le service
import { TaskService }  from './services/tasks.service';

// Importer les composants de chaque page
import { ToDoComponent }  from './components/ToDoComponent';
import { SingleItem }  from './directives/single.item';

import { AppComponent }  from './app.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ToDoComponent, SingleItem], //déclaration des composants et directives
  bootstrap: [ AppComponent ]
})
export class AppModule { }
