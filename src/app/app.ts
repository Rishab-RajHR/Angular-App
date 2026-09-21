import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
    isLoggedIn = true;

    marks = 65;

    showBox = true;

    toggleBox() {
      this.showBox = !this.showBox;
    }

    age = 0;

    updateAge(val: string){
       this.age = Number(val);
    }
}
