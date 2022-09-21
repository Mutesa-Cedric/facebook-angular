import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  post!: Post;

}
