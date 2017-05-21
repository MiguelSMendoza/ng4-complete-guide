import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyB71Owvet8-7f_D1rxI4JSwR--jyZaGZDE',
      authDomain: 'recipe-book-ca401.firebaseapp.com',
      databaseURL: 'https://recipe-book-ca401.firebaseio.com',
      projectId: 'recipe-book-ca401',
      storageBucket: 'recipe-book-ca401.appspot.com',
      messagingSenderId: '1041764836154'
  });
  }

}
