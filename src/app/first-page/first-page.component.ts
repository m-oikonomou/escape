import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  userName: string = '';
  passWord: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFoundMe() {
    this.userName = 'Oh! I recognise you!';
    this.passWord = 'Ok, so now you may proceed.';
  }
}
