import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/database";
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'daily-tracker';
  database: firebase.database.Database;

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyAAUTnEDtQJmWBPCjE_LKE2EoHV3Vdt2No",
      authDomain: "intro-4b57d.firebaseapp.com",
      databaseURL: "https://intro-4b57d.firebaseio.com",
      projectId: "intro-4b57d",
      storageBucket: "intro-4b57d.appspot.com",
      messagingSenderId: "859950668676",
      appId: "1:859950668676:web:a460f43bbc35708cbc9bd1"
    };
    firebase.initializeApp(firebaseConfig);

    this.database = firebase.database();
  
    const preObject = document.getElementById('object');
    const dbRefObject = this.database.ref().child('object');
  
    dbRefObject.on('value', snap => console.log(snap.val()));
  }
  // Your web app's Firebase configuration
  
}
