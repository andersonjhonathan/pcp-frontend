import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { UploadComponent } from './pages/upload/upload.component';
import { GanttComponent } from './pages/gantt/gantt.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tarefas', component: TarefasComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'gantt', component: GanttComponent }
];