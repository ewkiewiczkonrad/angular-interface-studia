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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchBarComponent,
    BadgesComponent,
    ProfitComponent,
    TotalComponent,
    ContentComponent,
    SecondContentComponent,
    ThirdContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
