import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/models/storyModel';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  story!: Story;

}
