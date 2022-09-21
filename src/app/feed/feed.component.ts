import { Component, OnInit } from '@angular/core';
import { Post, posts } from 'src/models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts:Post[]=posts
  constructor() { }

  ngOnInit(): void {
  }

}
