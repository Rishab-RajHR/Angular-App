// import { FormsModule } from '@angular/forms';
import { Component, computed, effect, signal } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
  //  username = "Alex";
  // name = signal('Alex');

  user = signal<{ name: string; age: number}>({
     name:"Alex",
     age: 25
  })

  updateName(value: string) {
      this.user.update(user => ({ ...user, name: value }));
  }

  updateAge() {
     this.user.update(user => ({ ...user, age: user.age+1 }));
  }
}
