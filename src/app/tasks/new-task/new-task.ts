import { Component } from '@angular/core';
import { FormsModule , NgForm} from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- כאן

@Component({
  selector: 'app-new-task',
    standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './new-task.html',
styleUrls: ['./new-task.css']
})
export class NewTask {
  title: string = '';
  summary: string = '';
  dueDate: string = ''; 
  onSumbmit(form:NgForm){
    console.log(form.value.title, form.value.summary, form.value.dueDate);
    console.log(form)
  }
}
