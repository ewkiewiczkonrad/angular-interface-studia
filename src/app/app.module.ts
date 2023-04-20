import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BadgesComponent } from './components/badges/badges.component';
import { ProfitComponent } from './components/profit/profit.component';
import { TotalComponent } from './components/total/total.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SearchBarComponent,
    BadgesComponent,
    ProfitComponent,
    TotalComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
