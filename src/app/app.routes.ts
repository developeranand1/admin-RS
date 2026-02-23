import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { M3mBlogListComponent } from './features/dashboard/m3m/m3m-blog-list/m3m-blog-list.component';
import { M3mProjectListComponent } from './features/dashboard/m3m/m3m-project-list/m3m-project-list.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [

  // Default redirect
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login page
  { path: 'login', component: LoginComponent },

  // Dashboard Layout
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },

      {
        path: 'm3m',
        children: [
          { path: 'blog-list', component: M3mBlogListComponent },
          { path: 'project-list', component: M3mProjectListComponent }
        ]
      }
    ]
  },

  // 404
  { path: '**', redirectTo: 'login' }
];