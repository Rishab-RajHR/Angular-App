import { Component, signal } from '@angular/core';
import { Child } from './child/child';


@Component({
  imports: [Child],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
  // username: string = 'Alex';
  message: string = '';

  onMessage(msg: string){
     this.message = msg;
  }
}
