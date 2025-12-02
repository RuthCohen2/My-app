import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { CommonModule } from '@angular/common'; // נדרש בשביל *ngIf
import { Tasks } from './tasks/tasks';
import { NewTask } from './tasks/new-task/new-task';
import { ContactForm } from './contact-form/contact-form';
import { NewUser } from './users/new-user/new-user';





@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, CommonModule, Tasks, NewTask, ContactForm, NewUser],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = USERS;
  selectedUser: any = null;
  showContact: boolean = false;
  showAddUser: boolean = false;

  onAddUser(formValue: any) {
    console.log("aaaaaaaaaaaa")
    const id = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
const fullName = `${formValue.name.firstName} ${formValue.name.lastName}`.trim();
    const user: any = {
      id,
      name: fullName,
      avatar: ''
    };
    console.log(user)
    this.users = [...this.users, user]
    this.showAddUser = false;
    console.log(this.users)
  }


  protected readonly title = signal('my-app');

  onUserSelect(id: string) {
    const choiceUser = this.users.find(prev => prev.id == id);
    this.selectedUser = choiceUser; // ✅ שמירת המשתמש שנבחר
    console.log(choiceUser);
  }
  openContactDialog() {
    this.showContact = true;
  }

  closeContactDialog() {
    this.showContact = false;
  }
  openNewUser() {
    this.showAddUser = true;
  }

closeNewUser() {
  this.showAddUser = false; 
}  
}

