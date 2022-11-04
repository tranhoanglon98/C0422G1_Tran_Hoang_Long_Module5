import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showAboutUstText: boolean = false;
  showSpaText: boolean = false;
  showSpaPackageText: boolean = false;
  showRoomText: boolean = false;

  @HostListener('window:scroll', ['$event'])
  homeScroll() {
    let aboutUsPosition = document.getElementById("aboutUs").offsetTop;
    let spaPosition = document.getElementById("spa").offsetTop;
    let spaPackagePosition = document.getElementById("spaPackage").offsetTop;
    let roomPosition = document.getElementById("room").offsetTop;
    let yPosition = window.pageYOffset;
    if (yPosition > aboutUsPosition - 400) {
      this.showAboutUstText = true;
    }
    if (yPosition > spaPosition - 400) {
      this.showSpaText = true;
    }
    if (yPosition > spaPackagePosition - 400) {
      this.showSpaPackageText = true;
    }
    if (yPosition > roomPosition - 400) {
      this.showRoomText = true;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
