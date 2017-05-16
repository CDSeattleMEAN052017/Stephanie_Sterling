import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {
  currency:number;
  constructor() {
  }

  ngOnInit() {
    this.currency = 5678.90;
  }

}
