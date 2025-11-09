import { Component, EventEmitter, output } from '@angular/core';
import {USERS} from '../fake_users'
import {Input} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
//  selectedUser=USERS[0];
@Input({required:true}) isSelected!: boolean;
@Input() name!: string;
@Input() avatar!: string;
@Input({required: true}) id!: string;
@Output() userselected = new EventEmitter<string>();

onselect(){
  this.userselected.emit(this.id)
}

 get imagePath(){
  return 'assets/users/' +this.avatar;
 }
}