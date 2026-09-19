import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    // value = 10;

    // value = "Alex";

    name : unknown | number = 'Tovino';
    age: number = 12;
    isValid: boolean = true;

    handleClick() {
      let value;
      value = "Alex Pandian"
      value = 12;
      console.log(value);
    }

    sum(a: number, b:number){
      console.log(a+b);
      //  return a+b;
    }
}
