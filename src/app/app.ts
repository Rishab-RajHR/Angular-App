import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    handleClick(){
        console.log("Button Clicked");
    }

    onTyping(event: any){
       console.log("Typed", event.target.value);
    }

    onKeyUp(event: any){
      console.log("Key Up Event", event.key);
    }

    onHover(){
      console.log("Hover event");
    }

    onLeave(){
      console.log("Leave event");
    }

    onBlur(){
      console.log("Blur event");
    }

    onFocus(){
      console.log("Focus event");
    }

}
