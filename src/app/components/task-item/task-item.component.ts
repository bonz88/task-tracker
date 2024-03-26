import { Component, Input, OnInit } from '@angular/core';
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

constructor() {}

ngOnInit(): void {
    
}
}
