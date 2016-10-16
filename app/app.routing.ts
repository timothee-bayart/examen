// Création des routes
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import des composants utilisés dans les routes
import { ToDoComponent }  from './components/ToDoComponent';
import { ToDoArchiveComponent  }  from './components/ToDoArchiveComponent';

const appRoutes: Routes = [
  // Définition des routes
  {
    path: '',
    redirectTo: '/toDo',
    pathMatch: 'full'
  },
  {
    path: 'toDo',
    component: ToDoComponent
  },
  {
    path: 'toDoArchive',
    component: ToDoArchiveComponent
  }
];

// Export de la class du module de routing
export const Router: ModuleWithProviders = RouterModule.forRoot(appRoutes);