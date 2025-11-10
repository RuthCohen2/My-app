import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';
import { CommonModule } from '@angular/common'; // נדרש בשביל *ngIf
import { Tasks } from './tasks/tasks';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, CommonModule,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = USERS;
  selectedUser: any = null;


  protected readonly title = signal('my-app');

  onUserSelect(id: string) {
    const choiceUser = this.users.find(prev => prev.id == id);
    this.selectedUser = choiceUser; // ✅ שמירת המשתמש שנבחר
    console.log(choiceUser);
  }
}