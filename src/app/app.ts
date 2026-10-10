import { Component, inject, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {

   name = signal('DMK');

   submitForm(){
       alert(`User ${this.name()} saved!`);
   }

}

