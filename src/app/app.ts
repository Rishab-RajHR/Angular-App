import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
  // Form model based on signals
  loginModel = signal({
      email: '',
      password: ''
  })

  // Create form from signal Model
  loginForm = form(this.loginModel);

  submit() {
    console.log(this.loginModel);
  }
}
