import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; //Font awesome icon importar e inicializar

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})

export class TasksItemComponent implements OnInit {
  @Input() task: Task = TASKS [0]
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()
  faTimes = faTimes; //inicializar

  constructor() {}

  ngOnInit(): void {

  }

  onDelete(task:Task) {
    console.log(task);
    this.onDeleteTask.emit(task)
  }

  onToggle(task:Task){
    console.log(task);
    this.onToggleReminder.emit(task)
  }

}
