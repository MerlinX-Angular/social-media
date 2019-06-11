import { Component, OnInit,Input } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-follow-button',
  templateUrl: './follow-button.component.html',
  styleUrls: ['./follow-button.component.css']
})
export class FollowButtonComponent implements OnInit {

  constructor(private apiService:ApiReqService, private router:Router) { }
  currentUser;
  @Input() postAuthorFollow;
  @Input() author;
  @Input() username;

  ngOnInit() {
     this.apiService.user.subscribe(
      (userData) => {
        this.currentUser = userData.id;
      }
    )
  }

toggleFollowing() {
  if(!this.currentUser){
    this.router.navigate(['/login']);
  }
  else {
  if(this.postAuthorFollow) {
    this.apiService.unfollowPostAuthor(this.author)
    this.postAuthorFollow = false;
  }
  else {
    this.apiService.followPostAuthor(this.author);
    this.postAuthorFollow = true;
  }
}

}
}
