import { Component, OnInit } from '@angular/core';
import { NavbarButton, navbarButtons } from '../../models/navbarButtonModel';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarButtons: NavbarButton[] = navbarButtons;
  constructor() {

  }

  ngOnInit(): void {
  }

}
