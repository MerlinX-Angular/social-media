import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { ApiReqService } from '../api-req.service';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})

export class HomeComponent implements OnInit {
  page:boolean = false;
  searchTag:string = "";
  user:User;

  constructor(public location: Location,public router:Router,private apiService:ApiReqService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){ return false; }
   }

  ngOnInit() {
    this.apiService.user.subscribe(user => { this.user = user })
    let loc = this.location.path();
    if(loc.split('/')[1] == "tag-search" ){
      this.searchTag = loc.split('/')[2]
      this.page = true;
    }
    else {
      this.page = false;
    }

  }
}
