import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { M3mBlogListComponent } from './features/dashboard/m3m/m3m-blog-list/m3m-blog-list.component';
import { M3mProjectListComponent } from './features/dashboard/m3m/m3m-project-list/m3m-project-list.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './shared/guards/auth.guard';
import { guestGuard } from './shared/guards/guest.guard';
import { M3mAddBlogComponent } from './features/dashboard/m3m/m3m-add-blog/m3m-add-blog.component';
import { M3mAddProjectComponent } from './features/dashboard/m3m/m3m-add-project/m3m-add-project.component';
import { M3mEnquiryListComponent } from './features/dashboard/m3m/m3m-enquiry-list/m3m-enquiry-list.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent ,canActivate: [guestGuard]},

  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [authGuard],   // ✅ PROTECTED
    children: [
      { path: '', component: DashboardComponent },

      {
        path: 'm3m',
        children: [
          { path: 'blog-list', component: M3mBlogListComponent },
          { path: 'blog-add', component: M3mAddBlogComponent },
            { path: 'project-add', component: M3mAddProjectComponent },
          { path: 'project-list', component: M3mProjectListComponent },
          {path:'enquiry-list', component:M3mEnquiryListComponent}
        ]
      }
    ]
  },

  { path: '**', redirectTo: 'login' }
];