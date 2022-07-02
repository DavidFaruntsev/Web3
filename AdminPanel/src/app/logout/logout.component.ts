import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../security.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private security: SecurityService) { }

  ngOnInit(): void {
    this.logout().then();
  }

  logout(){
    return this.security.logout();
  }

}
