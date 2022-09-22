import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {

  fontSize = 14;

  constructor() { }

  ngOnInit(): void {
  }

  changeFontSizeValue(value: number) {
    this.fontSize = value;
  }
}
