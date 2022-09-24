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
    let yPosition = window.pageYOffset;
    console.log(yPosition)
   if (yPosition > 400){
     this.showAboutUstText = true;
   }
   if (yPosition > 800){
     this.showSpaText = true;
   }
   if (yPosition > 1200){
     this.showSpaPackageText = true;
   }
   if (yPosition > 1600){
     this.showRoomText = true;
   }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
