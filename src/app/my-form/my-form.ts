import { Component } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  imports: [ FormsModule , ReactiveFormsModule],
  templateUrl: './my-form.html',
  styleUrl: './my-form.css'
})
export class MyForm {

}
