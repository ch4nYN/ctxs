import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }

  register(newUser: User) {
    const body = JSON.stringify(newUser);
    const headers = new Headers({'Content-Type' : 'application/json'});
    return this.http.post("users/register", body, { headers: headers})
      .map((response: Response) => {
        const result = response.json();
        return result;
      }).catch((error: Response) => Observable.throw(error.json()));
  }

  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post("users/login", body, { headers: headers})
      .map((response: Response) => {
        const result = response.json();
        return result;
      }).catch((error: Response) => Observable.throw(error.json()));
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      return false;
    }
  }

  getUserInfo() {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get('accounts/info' + token)
      .map((response: Response) => {
        const result = response.json();
        return result;
    });
  }
}
