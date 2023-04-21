import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CONTENT, CONTENT2, CONTENT2_PATH, CONTENT3, CONTENT_PATH} from "./const/navigation.const";
import {ContentComponent} from "./components/content/content.component";
import {SecondContentComponent} from "./components/second-content/second-content.component";
import {ThirdContentComponent} from "./components/third-content/third-content.component";
import {AppComponent} from "./app.component";

const routes: Routes = [

        {
          path: CONTENT,
          component: ContentComponent,
        },
        {
          path: CONTENT2,
          component: SecondContentComponent,
        },
        {
          path: CONTENT3,
          component: ThirdContentComponent,
        },
        { path: '', redirectTo: CONTENT_PATH, pathMatch: "full" },
      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
