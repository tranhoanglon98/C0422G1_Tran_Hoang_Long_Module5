import { Component, OnInit } from '@angular/core';
import {IWord} from "../i-word";
import {DictionaryServiceService} from "../dictionary-service.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  dictionary: string[]

  constructor(private dictionaryService: DictionaryServiceService) {
    this.dictionary =  this.dictionaryService.getWord()
  }

  ngOnInit(): void {
  }

}
