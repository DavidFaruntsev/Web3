import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "./security.service";
import {Observable} from "rxjs";
import {gameStatistics, playerInfo} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  apiUrl = 'http://localhost:8000/api/admin/players'

  constructor(private http: HttpClient, private security: SecurityService) { }

  getPlayerInfo(): Observable<playerInfo>{
    return this.http.get<playerInfo>(this.apiUrl, {headers: {
        'Authorization': this.security.getBearerToken()
      }})
  }
}
