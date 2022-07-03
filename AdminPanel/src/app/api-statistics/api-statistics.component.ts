import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-api-statistics',
  templateUrl: './api-statistics.component.html',
  styleUrls: ['./api-statistics.component.css']
})
export class ApiStatisticsComponent implements OnInit {

  chart:any;

  xData = [];
  yData = [];
  @Input() apiData:any
  @Input() labels = this.xData;
  @Input() data = this.yData;


  constructor() {Chart.register(...registerables);}

  ngOnInit(): void {
  }



}
