import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
import { ApiReqService } from './api-req.service';

@Injectable({
  providedIn:'root'
})
export class FeedResolver implements Resolve<any> {
  username:string;
  constructor(private apiService:ApiReqService) {
  }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(route.url[0].path == "favorites"){
      this.username = state.url.split('/')[2];
      return this.apiService.getUserById(this.username);
    }
    else {
        return  this.apiService.getFeed();
      }
  }
}
