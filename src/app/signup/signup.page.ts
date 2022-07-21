import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder) { 
    this.buildForm();
  }

  ngOnInit() {
  }
  buildForm(){
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      pass: ['',[Validators.required]]
    });
  }

  signup(){
    this.user = {
      name: this.signupForm.get('name').value,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('pass').value
    }
    console.log(this.user);
  }
}
