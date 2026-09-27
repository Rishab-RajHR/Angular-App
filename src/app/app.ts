import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { User } from './user';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
   users: any[] = [];

   constructor(private userService: User){}

   ngOnInit() {
      this.userService.getUsers().subscribe((data: any)=>{
          this.users = data;
      })
   }
}
