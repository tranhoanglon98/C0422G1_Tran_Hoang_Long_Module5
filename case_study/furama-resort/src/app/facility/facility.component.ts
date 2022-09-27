import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {

  isRoom: boolean = false;
  isHouse: boolean = false;
  isVilla: boolean = false;
  showAddButton:boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  chooseFacilityType(type: any) {
    this.isVilla = false
    this.isRoom = false
    this.isHouse = false
    this.showAddButton = false

    switch (type.value) {
      case "0":
        this.isVilla = false
        this.isRoom = false
        this.isHouse = false
        this.showAddButton = false
        break
      case "1":
        this.isVilla = true
        this.showAddButton = true
        break
      case "2":
        this.isHouse = true
        this.showAddButton = true
        break
      case "3":
        this.isRoom = true
        this.showAddButton = true
        break
    }
  }
}
