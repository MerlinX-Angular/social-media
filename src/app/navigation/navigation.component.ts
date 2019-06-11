import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnDestroy {
  isLoggedIn;
  isLoggedOut;
  user:User;
  unsubLogOut:Subscription;

  constructor(private apiService:ApiReqService) { }

  ngOnInit() {
    this.apiService.user.subscribe(user => { this.user = user})
    this.isLoggedIn = this.apiService.isLoggedIn;
    this.isLoggedOut = this.apiService.isLoggedOut;
  }

  ngOnDestroy(){
    this.unsubLogOut.unsubscribe();
  }

  logout() {
    this.unsubLogOut = this.apiService.logOutUser().subscribe();
  }

}
