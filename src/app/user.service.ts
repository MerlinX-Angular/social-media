import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { User } from './interfaces/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  user;
  helper = new JwtHelperService();
  public myData: BehaviorSubject<any> = new BehaviorSubject<any>(new User());

  constructor(private cookieS:CookieService,private http:HttpClient) {}

  populate(){
    if (this.cookieS.get("siteCookie")) {
      return this.http.get('/api/user').subscribe(data => {
        this.updateUserData(data);
        });
   }
   else {
     return null;
    }
  }

  updateUserData(data){
    this.myData.next(data);
  }

  isCookieExpired(){
    let cookie = this.cookieS.get("siteCookie");
    return this.helper.isTokenExpired(cookie);
  }

  ifAuthenticated(){
    let cookie = this.cookieS.get("siteCookie");
    if(!(this.helper.isTokenExpired(cookie) || undefined)){
      return true;
    }
    else {
      return false;
    }
  }

  getCurrentUser() {
    return this.myData;
  }

}
