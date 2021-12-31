import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormsComponent } from './forms/forms.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MymovieComponent } from './mymovie/mymovie.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { HttpClientModule } from '@angular/common/http';
import { PipePipe } from './pipe.pipe';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    MymovieComponent,
    MyhomeComponent,
    PipePipe,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
