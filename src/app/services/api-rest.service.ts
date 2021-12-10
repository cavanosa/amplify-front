import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  apirestURL = environment.apirestURL;

  constructor(
    private httpClient: HttpClient
  ) { }

  public getMessageAdmin(): Observable<any> {
    return this.httpClient.get<any>(this.apirestURL + 'hello-admin');
  }

  public getMessageUser(): Observable<any> {
    return this.httpClient.get<any>(this.apirestURL + 'hello-user');
  }
}
