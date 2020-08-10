import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-health-rate',
  templateUrl: './health-rate.component.html',
  styleUrls: ['./health-rate.component.css']
})
export class HealthRateComponent implements OnInit {

  @Input() propertyRated: string;
  @Input() functionToExec: (i: number) => void;
  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
