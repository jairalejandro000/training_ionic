import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private toastController: ToastController,
    private router: Router) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, 
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      pass: ['', [Validators.required]]
    });
  }

  login(){
    this.user = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('pass').value
    }
    this.userService.login(this.user).subscribe((data) =>{
      if(data.data.token){
        localStorage.setItem('token', btoa(data.data.token));
        localStorage.setItem('user', btoa(data.data.user.role.name));
        this.router.navigate(['/panel']);
      }
    });
    console.log(this.user);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
