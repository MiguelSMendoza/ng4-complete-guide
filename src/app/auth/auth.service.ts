import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(
      response => {
        this.router.navigate(['/']);
        this.getToken();
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(
      response => {
        this.router.navigate(['/']);
        this.getToken();
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    );
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
