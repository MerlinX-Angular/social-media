import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorited-posts',
  templateUrl: './favorited-posts.component.html',
  styleUrls: ['./favorited-posts.component.css']
})
export class FavoritedPostsComponent implements OnInit {
  main;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.main = this.route.snapshot.data['favoritedPosts'];
  }

}
