import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ProfitComponent } from './components/profit/profit.component';
import { TotalComponent } from './components/total/total.component';
import { ContentComponent } from './components/content/content.component';
import { SecondContentComponent } from './components/second-content/second-content.component';
import { ThirdContentComponent } from './components/third-content/third-content.component';
import {AppRoutingModule} from "./app-routing.module";
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoggedComponent } from './components/logged/logged.component';
import {LoggedRoutingModule} from "./components/logged/logged-routing.module";
import {LoggedModule} from "./components/logged/logged.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignInComponent,
    RegisterComponent,
    LoggedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoggedModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
