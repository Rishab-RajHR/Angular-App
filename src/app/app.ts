import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
   lName = "alex"
   uName = "ALEX"

   today = new Date();

   amount = 2500;

   per = 0.35;

   user = {
      name: 'Alex',
      age: 24
   }
}
