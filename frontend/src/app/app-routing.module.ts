import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {NavbarComponent } from './navbar/navbar.component'
import {HomeComponent} from './home/home.component'
import {CvComponent} from './cv/cv.component'



const routes: Routes = [
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'cv',
    component:CvComponent
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
