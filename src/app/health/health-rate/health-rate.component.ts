import {Component, Input, OnInit} from '@angular/core';
import * as constants from '../constants-health';

@Component({
  selector: 'app-health-rate',
  templateUrl: './health-rate.component.html',
  styleUrls: ['./health-rate.component.css']
})
export class HealthRateComponent implements OnInit {
  constants = constants;
  @Input() propertyRated: string;
  @Input() functionToExec: (i: number) => void;
  constructor() { }

  ngOnInit(): void {
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  legendSet(i: number, propertyRated: string) {
    var legendStringSrc = propertyRated.toUpperCase() +'_LEGEND_' + (i+1)
    document.getElementById(propertyRated + "SingleLegend").textContent=(i+1) + ' - ' + constants[legendStringSrc]
  }

}
