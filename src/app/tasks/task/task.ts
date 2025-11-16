import { Component, Input } from '@angular/core';
import { task} from './task.model';



@Component({
  selector: 'app-task',
  standalone: true, 
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})


 
export class Task {
@Input() task!: task;
completed: boolean = false;
toggleCompleted() {
    this.completed = !this.completed;
  }
}
