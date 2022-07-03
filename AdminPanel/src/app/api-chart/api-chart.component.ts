import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from "chart.js";
import {GameStatisticsService} from "../game-statistics.service";
import {gameStatistics} from "../interfaces";

@Component({
  selector: 'app-api-chart',
  templateUrl: './api-chart.component.html',
  styleUrls: ['./api-chart.component.css']
})
export class ApiChartComponent implements OnInit, AfterViewInit {

  @ViewChild('apiChart') private apiChart: ElementRef | undefined;


  chart:any;
  data: any;
  xData = [];
  dataSet = [];

  constructor(private gameStatistics: GameStatisticsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.pieChartBrowser();


  }

  pieChartBrowser():void {
    // @ts-ignore
    this.gameStatistics.getGameStatistics().subscribe(data => {
      this.data = data;
      this.data = this.data[2];
      console.log(this.data)
      console.log(this.data[1]['api'])
      for (let i=0;i<this.data.length;i++){
        // @ts-ignore
        this.xData.push(this.data[i]['api']);
        // @ts-ignore
        this.dataSet.push(this.data[i]['aantal'])

        console.log(this.data)
        const data = {
          labels: this.xData,
          datasets: [{
            label: "api",
            data: [this.data[0]['aantal'], this.data[1]['aantal'],this.data[2]['aantal'],this.data[3]['aantal'],this.data[4]['aantal']],
            backgroundColor: [
              'rgb(8, 61, 119)',
              'rgb(235, 235, 211)',
              'rgb(244, 211, 94)',
              'rgb(238, 150, 75)',
              'rgb(249, 87, 56)'
            ],
            color: 'white'
          }]
        }

        let chartStatus = Chart.getChart('apiChart')
        if (chartStatus != undefined){
          chartStatus.destroy();
        }
        const chart = new Chart('apiChart', {
          type: 'doughnut',
          data: data,
        });

      }
    })



  }

}
