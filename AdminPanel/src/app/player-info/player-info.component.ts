import { Component, OnInit } from '@angular/core';
import {PlayerInfoService} from "../player-info.service";
import {playerInfo} from "../interfaces";

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  data:any

  constructor(private playerInfo: PlayerInfoService) { }

  ngOnInit(): void {
    this.playerInfo.getPlayerInfo().subscribe((data: playerInfo) => {
      this.data = data;
    })
  }

}
