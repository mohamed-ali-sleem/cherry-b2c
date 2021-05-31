import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // toggleMenu()
  }
  toggleMenu() {
    let element = document.getElementById('responsive-menu-div')!;
    element.classList.toggle('responsive-menu-open');
  }
}
