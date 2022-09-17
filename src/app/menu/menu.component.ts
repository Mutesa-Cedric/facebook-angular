import { Component, OnInit } from '@angular/core';
import { FriendRequest, friendRequests } from 'src/models/friendRequestModel';
import { MenuLink, menuLinks } from '../../models/MenuLinksModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuLinks:MenuLink[]=menuLinks;
  friendRequests:FriendRequest[]=friendRequests;
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
