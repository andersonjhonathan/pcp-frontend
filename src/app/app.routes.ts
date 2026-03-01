import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TarefasComponent } from './pages/tarefas/tarefas.component';
import { UploadComponent } from './pages/upload/upload.component';
import { GanttComponent } from './pages/gantt/gantt.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './core/auth-guard';
import { ProtectedLayout } from './layout/protected-layout/protected-layout';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ProtectedLayout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tarefas', component: TarefasComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'gantt', component: GanttComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }

];