import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Post } from '../interfaces/post.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.css']
})
export class GlobalFeedComponent implements OnInit,OnDestroy {
  tagsList:Array<string>;
  posts:Post;
  page:number = 1;
  currentPage:any;
  unsubPosts:Subscription;
  unsubTags:Subscription;

  constructor(private apiService:ApiReqService,private router:Router,private route:ActivatedRoute) {
    this.route.paramMap
    .pipe(map(params => params.get('page')))
    .subscribe(page => this.currentPage = page);
  }

  ngOnInit() {
    this.unsubPosts = this.apiService.getPosts().subscribe((posts:Post) => this.posts = posts);
    this.unsubTags = this.apiService.getTags().subscribe((tags:Array<string>) => this.tagsList = tags);
  }

  ngOnDestroy(){
    this.unsubPosts.unsubscribe();
    this.unsubTags.unsubscribe();
  }

  pageChange(newPage: number) {
    this.router.navigate(['/global-feed/',newPage]);
  }

}
