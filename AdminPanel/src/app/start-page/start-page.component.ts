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

  constructor(private statistics: GameStatisticsService) { }

  ngOnInit(): void {
    this.statistics.getGameStatistics().subscribe((response:gameStatistics) => {
      this.data = response;
    });
  }

}
