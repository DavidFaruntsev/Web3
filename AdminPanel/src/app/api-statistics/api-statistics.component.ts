import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-api-statistics',
  templateUrl: './api-statistics.component.html',
  styleUrls: ['./api-statistics.component.css']
})
export class ApiStatisticsComponent implements OnInit {

  @Input() apiData = [];

  constructor() { }

  ngOnInit(): void {
  }

}
