import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {
  main;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.main = this.route.snapshot.data['userPostsResolve'];
  }

}
