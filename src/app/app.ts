import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';


@Component({
  imports: [CommonModule],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
    // count  = signal(0);
    // name = signal('Angular');

    // setCount(){
    //    this.count.set(2);
    // }

    count = signal(2);
    price = signal(5);

    // doubleCount = computed(() => this.count() * 2);

    total = computed(() => this.count() * this.price());
    constructor(){
      effect(() => {
         console.log("Double Count:", this.total());
      })
    }

    updateCount(){
       this.count.update(c => c + 1);
    }

    updatePrice(){
       this.count.update(p => p + 1);
    }
}
