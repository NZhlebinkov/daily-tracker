import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  skinRating: number;
  gutRating: number;
  hairRating: number;

  constructor() {
  }

  ngOnInit(): void {
    this.setSkinRating = this.setSkinRating.bind(this); // Since I am calling this function from app-health-rate
    this.setGutRating = this.setGutRating.bind(this);
    this.setHairRating = this.setHairRating.bind(this);
  }

  setSkinRating(i: number): void {
    this.skinRating = i + 1;
  }

  setGutRating(i: number): void {
    this.gutRating = i + 1;
  }

  setHairRating(i: number): void {
    this.hairRating = i + 1;
  }
}
