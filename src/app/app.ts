import { Component, signal } from '@angular/core';
import { Events } from './events/events';

@Component({
  imports: [Events],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
