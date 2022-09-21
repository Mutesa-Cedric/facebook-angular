import { Component, OnInit } from '@angular/core';
import { stories, Story } from 'src/models/storyModel';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  currentStories:Story[]=stories.splice(0,4)
  stories:Story[]=stories
  constructor() { }

  ngOnInit(): void {
  }

}
