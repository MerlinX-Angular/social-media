import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router';
import { ApiReqService } from '../api-req.service';
import { User } from '../interfaces/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user:string;
  userInfo:User;
  loggedUser:String;
  canModify:Boolean;
  unsubLoggedUser:Subscription;
  unsubUser:Subscription;

  constructor(private apiService:ApiReqService ,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.user = params.get('user') });
    this.unsubLoggedUser = this.apiService.user.subscribe(loggedUser => {this.loggedUser  = loggedUser.id; (this.loggedUser == this.user) ? this.canModify = true : this.canModify = false } );
    this.unsubUser = this.apiService.getUserById(this.user).subscribe((userInfo:User) => this.userInfo = userInfo);
  }

  ngOnDestroy(){
    this.unsubLoggedUser.unsubscribe();
    this.unsubUser.unsubscribe();
  }

}
