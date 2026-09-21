import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
  //  items = ['HTML','CSS','JavaScript', 'Angular'];

  //  users = [
  //    { name: 'Alex', age: 24 },
  //    { name: 'John', age: 30 },
  //    { name: 'Alice', age: 28 }
  //  ];

  items = ['Apple', 'Banana', 'Cherry', 'Date'];

  removeItem(i: number) {
    this.items.splice(i, 1);
  }
}
