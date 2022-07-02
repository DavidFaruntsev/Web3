import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import { AuthorizationFailedComponent } from './authorization-failed/authorization-failed.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginComponent,
    AuthorizationFailedComponent,
    PlayerInfoComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: '', component: StartPageComponent},
      {path: 'authorization-failed', component: AuthorizationFailedComponent},
      {path: 'player-info', component:PlayerInfoComponent},
      {path: 'logout', component:LogoutComponent}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
