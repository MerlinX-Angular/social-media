import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiReqService } from '../api-req.service';
import { ActivatedRoute,Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.css']
})
export class TagSearchComponent implements OnInit,OnDestroy {
  tagsList:Array<string>;
  filteredPosts:Post;
  tag:String;
  unsubFiltered:Subscription;
  unsubTags:Subscription;

  constructor(private apiService:ApiReqService,private route:ActivatedRoute,private router:Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){ return false; }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.tag = params.get('tag') });
    this.unsubFiltered = this.apiService.filterPostsBySearchTag(this.tag).subscribe((filteredPosts:Post) => {this.filteredPosts = filteredPosts})
    this.unsubTags = this.apiService.getTags().subscribe((tags:Array<string>) => this.tagsList = tags)
  }

  ngOnDestroy() {
    this.unsubFiltered.unsubscribe();
    this.unsubTags.unsubscribe();
 }

}
