import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {

}
