import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { Header } from './header/header';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,User],
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> d8ea6e0a5ca496ce2378c308706753b448ca3420
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
<<<<<<< HEAD
  protected readonly title = signal('first');
=======
  protected readonly title = signal('my-app');
>>>>>>> d8ea6e0a5ca496ce2378c308706753b448ca3420
}
