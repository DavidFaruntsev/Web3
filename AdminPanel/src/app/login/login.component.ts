import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../security.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private security: SecurityService) {
    this.security = security;
  }

  ngOnInit(): void {
  }

  loginUser(username: string, password: string) {
    return this.security.login(username,password)
  }
}
