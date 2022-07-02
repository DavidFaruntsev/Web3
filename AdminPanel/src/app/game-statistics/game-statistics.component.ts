import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-statistics',
  templateUrl: './game-statistics.component.html',
  styleUrls: ['./game-statistics.component.css']
})
export class GameStatisticsComponent implements OnInit {

  @Input() aantalSpelers = 0;
  @Input() aantalSpellen = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
