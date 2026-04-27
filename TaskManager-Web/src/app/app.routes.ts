import { Routes } from '@angular/router';
import { TarefaListaComponent } from './components/tarefa-lista/tarefa-lista';
import { TarefaFormComponent } from './components/tarefa-form/tarefa-form';

export const routes: Routes = [
  { path: '', redirectTo: '/tarefas', pathMatch: 'full' },
  { path: 'tarefas', component: TarefaListaComponent },
  { path: 'tarefas/nova', component: TarefaFormComponent },
  { path: 'tarefas/editar/:id', component: TarefaFormComponent }
];
