import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {
  AUTH,
  CONTENT,
  CONTENT2,
  CONTENT2_PATH,
  CONTENT3,
  CONTENT_PATH, LOGGED,
  REGISTER,
  SIGN_IN
} from "./const/navigation.const";
import {ContentComponent} from "./components/content/content.component";
import {SecondContentComponent} from "./components/second-content/second-content.component";
import {ThirdContentComponent} from "./components/third-content/third-content.component";
import {AppComponent} from "./app.component";
import {SignInComponent} from "./components/auth/sign-in/sign-in.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {AuthComponent} from "./components/auth/auth.component";
import {LoggedComponent} from "./components/logged/logged.component";

const routes: Routes = [
  {path: LOGGED, component: LoggedComponent},
        { path: '', redirectTo: AUTH, pathMatch: "full" },
      { path: AUTH, component: AuthComponent,
    children:[
      {path: SIGN_IN, component: SignInComponent},
      {path: REGISTER, component: RegisterComponent},
      {path: '', redirectTo: 'sign-in', pathMatch: 'full'}
    ]},
      ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
