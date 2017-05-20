import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  allUsers() {
    return this._http.get('/users').map(data => {
      return data.json()
    })
  }

  createUser(formData) {
    return this._http.post('/users', formData).map(data => {
      return data.json()
    })
  }

  toLogin(formData) {
    return this._http.post('/users/login', formData).map(data => {
      return data.json()
    })
  }
}
