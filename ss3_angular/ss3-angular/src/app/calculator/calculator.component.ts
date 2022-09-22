import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;

  calculate(num1: string, num2: string, operator: string) {
    this.result = eval(num1 + operator + num2);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
