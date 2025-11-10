import { Component, Input } from '@angular/core';
import { fakeTasks } from './fake_tasks';
import { CommonModule } from '@angular/common';
import { Task } from './task/task';


@Component({
  selector: 'app-tasks',
    standalone: true,
  imports: [CommonModule, Task],  
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})

export class Tasks {
@Input() name!:string;
@Input() userId!:string;
tasks = fakeTasks;
 get userSelectedTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
}

