import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CategoriesComponent } from './categories/categories.component';
import { SareesComponent } from './sarees/sarees.component';
import { HomeLivingComponent } from './home-living/home-living.component';
import { MensWearComponent } from './mens-wear/mens-wear.component';
import { LoungwearComponent } from './loungwear/loungwear.component';
import { SutaOrderComponent } from './suta-order/suta-order.component';

@NgModule({
  declarations: [
    AppComponent,
 
      HomePageComponent,
      LoginPageComponent,
      SignupComponent,
      ForgotPasswordComponent,
      CategoriesComponent,
      SareesComponent,
      HomeLivingComponent,
      MensWearComponent,
      LoungwearComponent,
      SutaOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
