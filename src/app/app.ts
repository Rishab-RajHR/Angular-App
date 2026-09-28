import { Component, inject, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from './services/user-service';
import { User } from './models/user';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
    userService = inject(UserService);

    users = toSignal<User[]>(this.userService.getUsers())
}

