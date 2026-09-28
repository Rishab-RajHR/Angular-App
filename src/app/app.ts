import { Component, inject, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { User } from './user';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserService } from './user-service';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
    userService = inject(UserService);

    users : any = toSignal(this.userService.getUsers())
}

