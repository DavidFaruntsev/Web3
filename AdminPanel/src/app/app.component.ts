import { Component } from '@angular/core';
import {SecurityService} from "./security.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminPanel';

  loginStatus = this.security.getAuthStatus()

  constructor(private security: SecurityService) {}

  isAuthorized(){
    if (this.security.getAuthStatus()){
      return true;
    } else {
      return false;
    }
  }
}
