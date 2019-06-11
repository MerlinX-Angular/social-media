import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
import { ApiReqService } from './api-req.service';

import { User } from './interfaces/user.interface';

@Injectable({
  providedIn:'root'
})
export class FavoriteResolver implements Resolve<any> {
  id:string;
  currentUser:User;
  constructor(private apiService:ApiReqService) { }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    if(route.url[0].path == "favorites"){
      this.id = state.url.split('/')[2];
      return this.apiService.getSelectedUserFavoritedPosts(this.id);
    }
    else if(route.url[0].path == "your-favorites"){
      this.apiService.user.subscribe(currentUser => { this.currentUser = currentUser.id })
      return  this.apiService.getSelectedUserFavoritedPosts(this.currentUser);
     }
    else {
      return null;
    }

  }
}
