import { Component, signal } from '@angular/core';
import { Card } from './card/card';

@Component({
  imports: [Card],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {

}
