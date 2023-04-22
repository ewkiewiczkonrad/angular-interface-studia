import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  AUTH,
  CONTENT,
  CONTENT2,
  CONTENT2_PATH,
  CONTENT3, CONTENT3_PATH,
  CONTENT_PATH, LOGGED, LOGGED_PATH,
  REGISTER,
  SIGN_IN
} from "../../const/navigation.const";
import {ContentComponent} from "../content/content.component";
import {SecondContentComponent} from "../second-content/second-content.component";
import {ThirdContentComponent} from "../third-content/third-content.component";
import {AuthComponent} from "../auth/auth.component";
import {SignInComponent} from "../auth/sign-in/sign-in.component";
import {RegisterComponent} from "../auth/register/register.component";
import {LoggedComponent} from "./logged.component";

const routes: Routes = [
  {
    path: 'logged',
    component: LoggedComponent,
    children: [
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
      {path: '', redirectTo: CONTENT, pathMatch: 'full'}

]},
  { path: '', redirectTo: CONTENT, pathMatch: "full" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
