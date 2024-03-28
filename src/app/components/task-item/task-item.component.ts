import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
@Input() task!: Task;
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
constructor() {}

ngOnInit(): void {
    
}

onDelete(task: Task) {
  this.onDeleteTask.emit(task);
}

onToggle(task: Task){
  this.onToggleReminder.emit(task);
}
}
