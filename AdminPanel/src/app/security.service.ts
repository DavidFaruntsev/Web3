import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  apiUrl = 'http://localhost:8000/api'
  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(username:string, password:string){
    return this.http.post(`${this.apiUrl}/login_check`, {
        'username': username,
        'password': password
      }).subscribe(response => {
        this.token = response;
        this.token = this.token['token'];
        localStorage.setItem('jwt', this.token);
        return this.router.navigate(["/"]);
    },
      (error) => alert('Verkeerde gebruikersnaam en wachtwoord combinatie.')
    )
  }

  checkAuthStatus(){
    let jwtHelper = new JwtHelperService();

    if (!this.getToken()){
      return this.router.navigate(['authorization-failed']);
    } else { // @ts-ignore
      if (jwtHelper.isTokenExpired(this.getToken())){
            localStorage.removeItem(this.token);
            return this.router.navigate(['authorization-failed']);
          }
    }

    return;
  }

  getAuthStatus(){
    let jwtHelper = new JwtHelperService();

    if (!this.getToken()){
      return false;
    } else { // @ts-ignore
      if (jwtHelper.isTokenExpired(this.getToken())){
        localStorage.removeItem(this.token);
        return false;
      }
    }

    return true;
  }

  logout(){
    localStorage.removeItem('jwt');
    return this.router.navigate(['logout']);
  }

  getToken(){
    return localStorage.getItem('jwt');
  }

  getBearerToken(){
    this.checkAuthStatus();
    return `Bearer ${this.getToken()}`;
  }

  setToken(token:string){
    return localStorage.setItem('jwt', token);
  }
}
