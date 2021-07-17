import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { database } from 'firebase';
import { iu_tasks as dbAddress } from '../db-addresses';

@Component({
  selector: 'app-important-urgent',
  templateUrl: './important-urgent.component.html',
  styleUrls: ['./important-urgent.component.css']
})
export class ImportantUrgentComponent implements OnInit {
  dbAddress = dbAddress;
  iu: database.Reference;
  niu: database.Reference;
  inu: database.Reference;
  ninu: database.Reference;

  tasks = {
    "iu": [], // import ant-urgent
    "niu": [], // not-important-urgent
    "inu": [], // important-not-urgent
    "ninu": [] // not-important-not-urgent
  }; // Do I make 4 arrays for the different categories, a 2D array, or sth else?

  taskInputs =  new FormGroup({
    iu: new FormControl,
    niu: new FormControl,
    inu: new FormControl,
    ninu: new FormControl
  })
  // tasks = new FormArray({
  //   iu: new FormArray([]),
    
  // }
  //   new FormControl('iu'),
  //   new FormControl('niu'),
  //   new FormControl('inu'),
  //   new FormControl('ninu')
  // ]);
  // Will I implement a way to drag tasks from one category to the other, and inside the list?

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    for(var taskType in this.tasks) {
      // Would a two way binding be useful in this case?
      /* Bind to a child task-category component
        Populating the tasks would happen inside the component */
        console.log(dbAddress[taskType]);
        this.tasks[taskType] = this.formBuilder.group({})
        this[taskType] = database().ref(dbAddress[taskType]); // TODO

        // I'll do the writing to the db first, and then read, so I can test
    }
  }

  addTask(taskCategory: string): void { // TODO: How do I deal with the 'this' keyword, so my function doesn't break when used out of class
    var content: string = this.taskInputs[taskCategory].value;//TODO: iu.value;
    console.log("this.addTask started")
    console.log("content is ", content);
    var newTaskKey = this[taskCategory].push().key;
    this[taskCategory].child(newTaskKey).set(content);
    // this.tasks[taskCategory].addControl(newTaskKey, this.fb.control(content)) // Add FormControl with the newTaskKey as name
    // TODO: add the control without using FormBuilder (cause that breaks)
    // this.tasks[taskCategory].addControl(newTaskKey, new FormControl(content));

    // Would I also have 
  }
}
