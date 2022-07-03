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

  changeOrder() {
    let button = document.getElementById('orderButton');
    this.playerInfo.getPlayerInfo().subscribe((data:playerInfo) => {
      this.data = data;
      // @ts-ignore
      if (button.innerHTML == 'Nieuwste spelers') {
        this.data = this.data.reverse();
        // @ts-ignore
        button.innerHTML = 'Oudste spelers';
      } else {
        // @ts-ignore
        button.innerHTML = 'Nieuwste spelers'
      }
    })
  }
}
