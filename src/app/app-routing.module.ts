import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import {CategoriesComponent} from './categories/categories.component';
import { SareesComponent } from './sarees/sarees.component';
import { HomeLivingComponent } from './home-living/home-living.component';
import { MensWearComponent } from './mens-wear/mens-wear.component';
import { LoungwearComponent } from './loungwear/loungwear.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'Forgot',component:ForgotPasswordComponent},
    { path:'categories',component:CategoriesComponent},
    {path:'signup',component:SignupComponent},
    {path:'sarees' , component:SareesComponent},
    {path:'home-living' , component:HomeLivingComponent},
    {path:'mens-wear' , component:MensWearComponent},
    {path:'loungwear' , component:LoungwearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
