import { Component, signal } from '@angular/core';
import { FormField } from './form-field/form-field';

@Component({
  imports: [FormField],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
   email = '';

   onEmailChange(value: string) {
      console.log('Email:', value);
      this.email = value;
   }
}
