import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutesModule } from "app/auth/auth-routes.module";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutesModule,
    FormsModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent
  ]
})
export class AuthModule { }
