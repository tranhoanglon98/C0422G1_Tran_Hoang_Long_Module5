import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-facility',
  templateUrl: './update-facility.component.html',
  styleUrls: ['./update-facility.component.css']
})
export class UpdateFacilityComponent implements OnInit {
  isRoom: boolean = false;
  isHouse: boolean = false;
  isVilla: boolean = false;
  showSaveButton:boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  chooseFacilityType(type: any) {
    switch (type.value) {
      case "0":
        this.isVilla = false
        this.isRoom = false
        this.isHouse = false
        this.showSaveButton = false
        break
      case "1":
        this.isVilla = true
        this.isRoom = false
        this.isHouse = false
        this.showSaveButton = true
        break
      case "2":
        this.isVilla = false
        this.isRoom = false
        this.isHouse = true
        this.showSaveButton = true
        break
      case "3":
        this.isVilla = false
        this.isRoom = true
        this.isHouse = false
        this.showSaveButton = true
        break
    }
  }

}
