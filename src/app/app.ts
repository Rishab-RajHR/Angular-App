import { Component, inject, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {

   name = signal('Alex Pandian');

   submitForm() {
       alert(`User ${this.name()} saved successfully!`);
   }

}

