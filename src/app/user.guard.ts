import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ApiReqService } from './api-req.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  user;
  isLoggedIn;
  constructor(private apiService:ApiReqService,private router:Router,private userService:UserService) {
    this.apiService.user.subscribe(user => { this.user = user.id });
    this.isLoggedIn = this.apiService.isLoggedIn;
  }
  canActivate(): boolean {
    if(this.userService.isCookieExpired()) {
      this.apiService.logOutUser().subscribe();
      this.router.navigate(['/login']);
    }

    else {
      return true;
    }

  }

}
