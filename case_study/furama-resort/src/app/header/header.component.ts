import {Component, HostListener, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  //show side navBar
  showSideNavBar = false;

  clickMenuButton() {
    this.showSideNavBar = !this.showSideNavBar;
  }


  // show - hide navBar
  scrollDown: boolean;
  onTop: boolean = true;
  yPosition = window.pageYOffset;
  buttonColor: string

  @HostListener('window:scroll', ['$event'])
  scrolled() {
    this.scrollDown = window.pageYOffset > this.yPosition
    this.yPosition = window.pageYOffset
    this.onTop = window.pageYOffset == 0;
    let aboutUs = document.getElementById("aboutUs").offsetTop
    let footerPosition = document.getElementById("footer").offsetTop
    if (this.yPosition > aboutUs - 100 && this.yPosition < footerPosition) {
      this.buttonColor = "#00787b"
    } else {
      this.buttonColor = "white"
    }
  }


  constructor() {
  }

  ngOnInit(): void {
  }

}
