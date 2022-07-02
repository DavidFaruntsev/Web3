import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "./security.service";
import {Observable} from "rxjs";
import {gameStatistics} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class GameStatisticsService {

  apiUrl = 'http://localhost:8000/api/admin/aggregate'

  constructor(private http: HttpClient, private security: SecurityService) { }

  getGameStatistics(): Observable<gameStatistics>{
    return this.http.get<gameStatistics>(this.apiUrl, {headers: {
      'Authorization': this.security.getBearerToken()
      }})
  }

}
