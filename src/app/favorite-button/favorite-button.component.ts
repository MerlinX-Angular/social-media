import { Component, OnInit,Input } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class  FavoriteButtonComponent implements OnInit {

  constructor(private apiService:ApiReqService, private router:Router) { }
  currentUser;
  @Input() postFavorite;
  @Input() slug;

  ngOnInit() {
    this.apiService.user.subscribe(
    (userData) => {
      this.currentUser = userData.id;
    }
  )
}

toggleFavorite() {
  if(!this.currentUser){
    this.router.navigate(['/login']);
  }
  else {
    if(this.postFavorite) {
      this.apiService.unfollowPost(this.slug);
      this.postFavorite = false;
    }
    else {
      this.apiService.followPost(this.slug);
      this.postFavorite = true;
    }
  }
}

}
