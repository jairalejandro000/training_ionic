import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router){}
  canLoad(){
    if(localStorage.getItem('token')){
      return true;
    }else{
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
