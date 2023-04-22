import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoggedRoutingModule} from "./logged-routing.module";
import {MenuComponent} from "../menu/menu.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {BadgesComponent} from "../badges/badges.component";
import {ProfitComponent} from "../profit/profit.component";
import {TotalComponent} from "../total/total.component";
import {ContentComponent} from "../content/content.component";
import {SecondContentComponent} from "../second-content/second-content.component";
import {ThirdContentComponent} from "../third-content/third-content.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MenuComponent,
    SearchBarComponent,
    BadgesComponent,
    ProfitComponent,
    TotalComponent,
    ContentComponent,
    SecondContentComponent,
    ThirdContentComponent,
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    RouterModule
  ]
})
export class LoggedModule { }
