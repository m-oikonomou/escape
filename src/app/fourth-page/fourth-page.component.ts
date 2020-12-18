import { Component, OnInit, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.css']
})
export class FourthPageComponent implements OnInit {
 portrait: string = '';
 text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCheck() {
    if (this.portrait === "dolphin") {
      this.text = 'Grats!';
    }else {
      this.text = '';
    }
  }
}
