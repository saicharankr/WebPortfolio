import { EducationDetailsComponent } from './education-details/education-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  {
  path:'home',
  component:HomeComponent,
  },
  {
    path:'education-details',
    component:EducationDetailsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
