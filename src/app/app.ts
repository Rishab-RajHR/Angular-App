import { Component, signal } from '@angular/core';
import { Button } from './button/button';

@Component({
  imports: [Button],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
   saveData(){
      console.log("Data Fetch");
   }
}
