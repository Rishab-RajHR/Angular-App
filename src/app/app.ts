import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
    value: string = 'contact';

    tab = 'home';

    categories = '';
    updateCat(val: string) {
       this.categories = val.toLowerCase();
    }
}
