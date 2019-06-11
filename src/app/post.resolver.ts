import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
import { ApiReqService } from './api-req.service';

@Injectable({
  providedIn:'root'
})
export class PostResolver implements Resolve<any> {
  constructor(private apiService:ApiReqService) {
  }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    return this.apiService.getPostById(route.params.slug)
  }
}
