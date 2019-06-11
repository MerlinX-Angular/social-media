import { Component, OnInit,Input,Output,EventEmitter,OnDestroy } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import { Subscription } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit,OnDestroy {
  @Input() comment;
  @Output() deleteComment = new EventEmitter<any>();
  loggedUser:User;
  canModify: boolean;
  unsubLoggedUser:Subscription;

  constructor(private apiService:ApiReqService) { }

  ngOnInit() {
    this.unsubLoggedUser = this.apiService.user.subscribe(loggedUser => {
      this.loggedUser = loggedUser;
      this.canModify = (this.loggedUser.username === this.comment.author.username);
    })
  }

  deleteClicked(createdID) {
    this.deleteComment.emit(createdID)
  }

  ngOnDestroy(){
    this.unsubLoggedUser.unsubscribe();
  }

}
