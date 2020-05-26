import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  _url="http://localhost:9999/users";
  constructor(private _http: HttpClient) { }
  record(user: User) {
    return this._http.post<any>(this._url,user);
  };
}
