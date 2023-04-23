import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setCredentials(): void {
    sessionStorage.setItem('login', 'konrad');
    sessionStorage.setItem('password', 'haslo');
  }

  getLogin(): string | null {
    return sessionStorage.getItem('login');
  }

  getPassword(): string | null  {
    return sessionStorage.getItem('password');
  }
}