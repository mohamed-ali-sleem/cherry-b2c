import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: []
})
export class AuthComponent implements OnInit,OnDestroy {

  constructor() { }

 

  ngOnInit(): void { 
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('auth-page');
  }

  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("auth-page");
  }
}
