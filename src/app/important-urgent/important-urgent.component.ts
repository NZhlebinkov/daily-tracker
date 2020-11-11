import { Component, OnInit } from '@angular/core';
import "firebase/database";
import { iu_tasks as dbAddress } from '../db-addresses';

@Component({
  selector: 'app-important-urgent',
  templateUrl: './important-urgent.component.html',
  styleUrls: ['./important-urgent.component.css']
})
export class ImportantUrgentComponent implements OnInit {
  dbAddress = dbAddress;
  tasks = {
    "iu": [], // important-urgent
    "niu": [], // not-important-urgent
    "inu": [], // important-not-urgent
    "ninu": [] // not-important-not-urgent
  }; // Do I make 4 arrays for the different categories, a 2D array, or sth else?
  // Will I implement a way to drag tasks from one category to the other, and inside the list?

  constructor() { }

  ngOnInit(): void {
    for(var taskType in this.tasks) {
      // Would a two way binding be useful in this case?
      /* Bind to a child task-category component
        Populating the tasks would happen inside the component */
    }
  }

}
