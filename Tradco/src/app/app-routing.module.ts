import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent} from './login/login.component'
import { JobsComponent } from './home/jobs/jobs.component';
import { AdminComponent } from './Admin/admin/admin.component';


const routes: Routes = [
  { path: '',redirectTo:'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs/:id', component: JobsComponent },
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
