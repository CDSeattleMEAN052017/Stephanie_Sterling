import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() tasks: any[];
  @Output() updateTask = new EventEmitter();
  constructor() {}
    updateStatus(index){
      this.updateTask.emit({index});
    }

  ngOnInit() {
  }
}
