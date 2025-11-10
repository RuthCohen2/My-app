import { Component, EventEmitter, output } from '@angular/core';
import {USERS} from '../fake_users'
import {Input} from '@angular/core';
import {Output} from '@angular/core';
import {UserObj} from './user.model';




@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
//  selectedUser=USERS[0];
@Input({required:true}) isSelected!: boolean;
@Input({required: true})userObj!: UserObj;
@Output() userselected = new EventEmitter<string>();

onselect(){
  this.userselected.emit(this.userObj.id)
}


 get imagePath(){
  return 'assets/users/' +this.userObj.avatar;
 }
}