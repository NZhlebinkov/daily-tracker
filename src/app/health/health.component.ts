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

  constructor() { }

  ngOnInit(): void {
  }

  setSkinRating(i: number): void {
    this.skinRating = i + 1;
  }
}
