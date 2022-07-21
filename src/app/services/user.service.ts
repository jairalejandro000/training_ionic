import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient,
    private router: Router) { }

  login(user: User){
    return this.http.post<any>(`${this.API_URL}auth/login`, user)
  }
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
}
