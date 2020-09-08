import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common'
import { AppComponent } from '../app.component';
import * as firebase from "firebase/app";
import "firebase/database";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  skinRating: number;
  gutRating: number;
  hairRating: number;
  dbRefSkinRating: firebase.database.Reference;
  dbRefGutRating: firebase.database.Reference;
  dbRefHairRating: firebase.database.Reference;

  constructor() {
  }

  ngOnInit(): void {
    var todayString = formatDate(Date.now(),"y-MM-dd", 'en-CA'); // Using Canadian locale in order to get the wanted date format
    this.setSkinRating = this.setSkinRating.bind(this); // Since I am calling this function from app-health-rate
    this.setGutRating = this.setGutRating.bind(this);
    this.setHairRating = this.setHairRating.bind(this);
    this.dbRefSkinRating = firebase.database().ref(todayString).child("skinRating");
    this.dbRefGutRating = firebase.database().ref(todayString).child("gutRating");
    this.dbRefHairRating = firebase.database().ref(todayString).child("hairRating");
    this.dbRefSkinRating.on('value', snap => console.log("Skin Rating: " + snap.val()));
  }

  setSkinRating(i: number): void {
    this.skinRating = i + 1;
    this.dbRefSkinRating.set(i+1);
  }

  setGutRating(i: number): void {
    this.gutRating = i + 1;
    this.dbRefGutRating.set(i+1);
  }

  setHairRating(i: number): void {
    this.hairRating = i + 1;
    this.dbRefHairRating.set(i+1);
  }
}
