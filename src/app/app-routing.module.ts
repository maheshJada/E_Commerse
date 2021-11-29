import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import {CategoriesComponent} from './categories/categories.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'Forgot',component:ForgotPasswordComponent},
    { path:'categories',component:CategoriesComponent},
    {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
