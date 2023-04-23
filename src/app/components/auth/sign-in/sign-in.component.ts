import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { NAVI } from 'src/app/const';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  NAVI=NAVI;
  login!: string;
  password!: string;
  isWarn:boolean = false;

  constructor(private route: Router, private authService: AuthService){
    this.authService.setCredentials();
  }

  log(){
    const storedLogin = this.authService.getLogin();
    const storedPassword = this.authService.getPassword();
    if(this.login === storedLogin && this.password === storedPassword){
    this.route.navigate([NAVI.LOGGED_PATH]);
    }
    else{
      this.isWarn = true;
    }
  }
}
