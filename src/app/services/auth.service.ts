import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken(): string | null {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).endsWith(environment.ACCESS_TOKEN) && localStorage.key(i).includes(environment.CLIENT_ID)) {
        return localStorage.getItem(localStorage.key(i));
      }
    }
    return null;
  }
}
