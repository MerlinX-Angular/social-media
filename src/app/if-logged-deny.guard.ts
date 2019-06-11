import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ApiReqService } from './api-req.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class IfLoggedDenyGuard implements CanActivate {
  user;
  isLoggedIn;
  constructor(private apiService:ApiReqService,private router:Router,private userService:UserService) {
  this.apiService.user.subscribe(user => { this.user = user.id });
  this.isLoggedIn = this.apiService.isLoggedIn;
}
canActivate(): boolean {
  if (!this.userService.ifAuthenticated()) {
    return true;
  }
  else {
    this.router.navigate(['/global-feed']);
    return false;
  }
}

}
