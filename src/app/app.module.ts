import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { GauHomeComponent } from './gau-home/gau-home.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule  } from "@angular/common/http";
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    UserAuthComponent,
    UserSignupComponent,
    GauHomeComponent,
    OnBoardingComponent,
    HeaderComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FontAwesomeModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
