import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    //  name = 'Alex';
    count = 0;

    handleClick(){
      let abc = "baad";
      console.log("Button clicked", abc);
      this.helloWorld();
    }

    helloWorld(){
      console.log("Hello World");
    }
}
