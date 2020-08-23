import { JobsComponent } from './jobs/jobs.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  {
    path: '',
    pathMatch: 'full',
    component:HomeComponent,
  },
  {
    path:'education-details',
    component:EducationDetailsComponent,
  },
  {
    path:'jobs',
    component:JobsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
