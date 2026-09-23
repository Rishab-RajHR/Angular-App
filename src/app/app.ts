// import { FormsModule } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule,CommonModule],
  selector: 'app-root',
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})
export class App {
    //  name = signal('');
    //  email = signal('');

    //  submitForm(){
    //    console.log(`Name: ${this.name()}, Email: ${this.email()}`);
    //  }

    userSignal = signal({ name: '', email: ''});

    form : any;

    constructor(private fb: FormBuilder) {
       this.form = this.fb.group({
          name: [''],
          email: ['']
       })

       this.form.valueChanges.subscribe((value: any) => {
          this.userSignal.set(value);
       });
    }

    submitForm() {
       console.log(`Name: ${this.userSignal().name}, Email: ${this.userSignal().email}`)
    }
}
