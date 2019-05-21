import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // TODO: change type of Observable
  login(username: string, password: string): Observable<any> {
    const body = {
      "login": username,
      "password": password,
      "api_token": "bAd8swEj6jdsDbeudgehj$0d5*d"
    };

    return this.httpClient.post(`${this.apiUrl}/login`, body);
  }

  logout() {
    // TODO: delete session or localstorage values???
  }

  isUserLoggedIn(): boolean {
    return true; // TODO: implement
  }
}
