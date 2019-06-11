import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.css']
})
export class YourFeedComponent implements OnInit {
  main;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.main = this.route.snapshot.data['FeedResolve'];
  }

}
