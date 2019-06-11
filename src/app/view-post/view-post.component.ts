import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';
import { ApiReqService } from '../api-req.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Post } from '../interfaces/post.interface';
import { User } from '../interfaces/user.interface';
import { Comment } from '../interfaces/comment.interface';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})

export class ViewPostComponent implements OnInit,OnDestroy {
  post:Post;
  loggedUser:User;
  canModify:boolean;
  postAuthorFollow:boolean;
  postFavorite:boolean;
  comments:Comment;
  commentControl = new FormControl();
  unsubUser:Subscription
  unsubFollowStatus:Subscription;
  unsubFavoriteStatus:Subscription;
  unsubPostComments:Subscription;

  constructor(private apiService:ApiReqService ,private route:ActivatedRoute) {}

  ngOnInit() {
    this.post = this.route.snapshot.data['postResolve'];
    this.unsubUser = this.apiService.user.subscribe(loggedUser => {this.loggedUser = loggedUser; this.canModify = (this.loggedUser.id === this.post.author.id && this.loggedUser.id !== undefined); })
    this.unsubFollowStatus = this.apiService.checkPostFollowStatus(this.post.author.id).subscribe((postAuthorFollowStatus:boolean) => { this.postAuthorFollow = postAuthorFollowStatus });
    this.unsubFavoriteStatus = this.apiService.checkPostFavoriteStatus(this.post.slug).subscribe((postFavorite:boolean) => { this.postFavorite = postFavorite })
    this.unsubPostComments = this.apiService.getPostComments(this.post.commentId).subscribe( (comments:Comment) => { this.comments = comments;
    })
  }

  ngOnDestroy(){
    this.unsubUser.unsubscribe();
    this.unsubFollowStatus.unsubscribe();
    this.unsubFavoriteStatus.unsubscribe();
    this.unsubPostComments.unsubscribe();
  }

  deletePost(slug){
    this.apiService.deletePost(slug);
  }

  addComment(){
    this.apiService.postNewComment(this.commentControl.value,this.comments.id).subscribe((comments:Comment) => { this.comments = comments; this.commentControl.reset(''); },
    error => {
      if(error.status === 401){
        location.reload();
      }
      else {
        console.log('error',error.message)
      }

    });
  }

  deleteComment(createdID,postCommentID){
    this.apiService.deleteComment(postCommentID,createdID).subscribe((comments:Comment) => {this.comments = comments},
    error => {
      if(error.status === 401){
        location.reload();
      }
      else {
        console.log('error',error.message)
      }

    });
  }


}
