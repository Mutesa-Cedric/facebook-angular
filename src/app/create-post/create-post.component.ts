import { Component, OnInit } from '@angular/core';
import { CreatePostButton, createPostButtons } from 'src/models/createPostButtonModel';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  createPostButtons: CreatePostButton[] = createPostButtons;
  constructor() { }

  ngOnInit(): void {
  }

}
