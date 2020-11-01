import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-important-urgent',
  templateUrl: './important-urgent.component.html',
  styleUrls: ['./important-urgent.component.css']
})
export class ImportantUrgentComponent implements OnInit {
  tasks: string[] // Do I make 4 arrays for the different categories, a 2D array, or sth else?
  // Will I implement a way to drag tasks from one category to the other, and inside the list?

  constructor() {
    this.tasks = [];
   }

  ngOnInit(): void {
    
  }

}
