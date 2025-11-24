import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.html',
  styleUrls: ['./contact-form.css'],
    imports: [ReactiveFormsModule]
})
export class ContactForm {
  @Output() close = new EventEmitter<void>();

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });

  cancel() {
    this.close.emit();
  }

  send() {
    if(this.form.valid) {
      console.log(this.form.value); // כאן אפשר לשלוח את הנתונים
      this.close.emit();
    } else {
      this.form.markAllAsTouched(); // מסמן שדות לא נכונים
    }
  }
}
