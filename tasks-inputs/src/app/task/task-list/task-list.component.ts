import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [
    {title: 'first task', status: 'incomplete'},
    {title: 'second task', status: 'incomplete'},
    {title: 'third task', status: 'incomplete'}
  ];
  constructor() { }

  ngOnInit() {
  }

  updateTaskStatus(index){
    if (this.tasks[index.index].status === 'incomplete'){
      this.tasks[index.index].status = 'complete';
    }
    else {
      this.tasks[index.index].status = 'incomplete';
    }
  }

}
