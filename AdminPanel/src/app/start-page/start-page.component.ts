import { Component, OnInit } from '@angular/core';
import {GameStatisticsService} from "../game-statistics.service";
import {gameStatistics} from "../interfaces";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  data:any
  aantalSpelers = 0;
  aantalSpellen = 0;
  apiData = [];

  constructor(private statistics: GameStatisticsService) { }

  ngOnInit(): void {
    this.getGameData();
  }

  getGameData(){
    return this.statistics.getGameStatistics().subscribe((response:gameStatistics) => {
      this.data = response;
      this.aantalSpellen = this.data[0]['aantal_spellen'];
      this.aantalSpelers = this.data[1]['aantal_spelers'];
      this.apiData = this.data[2];
    });
  }

}
