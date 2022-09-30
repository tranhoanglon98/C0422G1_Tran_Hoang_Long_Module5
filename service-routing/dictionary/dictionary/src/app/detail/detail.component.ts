import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {DictionaryServiceService} from "../dictionary-service.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  word: string
  mean: string
  dictionaryService = new DictionaryServiceService()

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap:ParamMap) =>{
      this.word = paramMap.get('word')
    })

    this.mean = this.dictionaryService.getMean(this.word)
  }

}
