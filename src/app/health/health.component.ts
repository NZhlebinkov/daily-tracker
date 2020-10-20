import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common'
import { AppComponent } from '../app.component';
import * as constants from './constants-health'
import * as firebase from "firebase/app";
import "firebase/database";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  constants = constants;
  ratingTypes = ['skin','gut','hair'];
  skinRating: number;
  gutRating: number;
  hairRating: number;
  dbRefSkinRating: firebase.database.Reference;
  dbRefGutRating: firebase.database.Reference;
  dbRefHairRating: firebase.database.Reference;

  constructor() {
  }

  setDbRef(dbRefName: string, ratingName: string, todayString: string) { // Here I set the dbRefs to the right attributes to reduce code duplication
    this[dbRefName] = firebase.database().ref(todayString).child(ratingName);
    this[dbRefName].once("value", snap => {
      if(snap.val()) {
        // console.log(ratingName + ": " + snap.val());
        this[ratingName] = snap.val();
      }
    })
  }

  ngOnInit(): void {
    var todayString = formatDate(Date.now(),"y-MM-dd", 'en-CA'); // Using Canadian locale in order to get the wanted date format
    this.setSkinRating = this.setSkinRating.bind(this); // Since I am calling this function from app-health-rate
    this.setGutRating = this.setGutRating.bind(this);
    this.setHairRating = this.setHairRating.bind(this);
    this.setDbRef("dbRefSkinRating", "skinRating",todayString);
    this.setDbRef("dbRefGutRating", "gutRating",todayString);
    this.setDbRef("dbRefHairRating", "hairRating",todayString);
    firebase.database().ref(todayString).once("value", snapshot  => { // Gets a snapshot specifically of an object in the database with
                                                                      // the same name as in todayString (for optimisation, so as not to get the whole database)
      if (snapshot.exists()) { // If there is no object with same name is in todayString, a snapshot would still be returned, with false in snapshot.exists()
        this.checkmarksSet(snapshot.val());
      }
    });
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

  checkmarksSet(snapshotValue) { // Check the database if any values for today are set and check the corresponding radio buttons
    var ratingType: string;
    // console.log(snapshotValue);
    for(ratingType of this.ratingTypes) {
      var ratingValue = snapshotValue[ratingType + 'Rating'];
      if(ratingValue) {
          // console.log(document.getElementById(ratingValue+'-'+ratingType));
          document.getElementById((ratingValue-1)+'-'+ratingType).click();
      }

      
    }
  }
}
