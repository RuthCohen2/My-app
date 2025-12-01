import { Component, Output , EventEmitter} from '@angular/core';
import { ReactiveFormsModule ,FormGroup, FormControl, Validators, FormArray} from '@angular/forms';
import { AbstractControl } from '../../../../node_modules/@angular/forms/index';


@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.css'
})
export class NewUser {
 @Output() newuser = new EventEmitter<any>();
  categories=['work', 'perosnal', 'kids']

  form = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('',  [Validators.required, Validators.maxLength(18)]),
      lastName: new FormControl('',  [Validators.required, Validators.maxLength(18)]),
    }),
    password: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }, 
    { validators: this.passwordMatch }),
    email: new FormControl('', [Validators.required, Validators.email]),
    categories: new FormArray(this.categories.map(() => new FormControl(false)), [Validators.required]),
  });
  get email() {
    return this.form.controls['email'];
  }
  passwordMatch(group: AbstractControl) {
    const p = group.get('password')?.value;
    const c = group.get('confirmPassword')?.value;
    return p === c ? null : { mismatch: true };
  }
  submit(){
     this.newuser.emit(this.form.value);


    console.log("sssssssssssssssssssssssssss")
  }
}


