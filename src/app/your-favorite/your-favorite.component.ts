import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-your-favorite',
  templateUrl: './your-favorite.component.html',
  styleUrls: ['./your-favorite.component.css']
})
export class YourFavoriteComponent implements OnInit {
  main;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.main = this.route.snapshot.data['favoritedPosts'];
  }

}
