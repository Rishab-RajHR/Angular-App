import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';

@Component({
  imports: [Login,SigninComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   name = "Angular Tutorial";
   isAdmin = true;
   count = 5;
   price = 199.99;
   isLogin = true;
   title = signal("Angular Tutorial Signal");
   getUser(){
      return "Tovino Thomas";
   }
}
