import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-api-statistics',
  templateUrl: './api-statistics.component.html',
  styleUrls: ['./api-statistics.component.css']
})
export class ApiStatisticsComponent implements OnInit {

  constructor() {Chart.register(...registerables);}

  ngOnInit(): void {
  }



}
