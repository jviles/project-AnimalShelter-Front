import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { environment } from '../../environments/environment';
import { User } from '../model/user.model';

const apiUrl = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {

  private initialized: boolean;
  private user: User;
  private userChange: Subject<User | null> = new Subject();

  // Observable user stream
  userChange$ = this.userChange.asObservable();

  constructor(private http: Http) { }

  private setUser(user: User = null) {
    this.user = user;
    this.userChange.next(user);
  }

  getUser() : User | null {
    return this.user;
  }

  signup(user: User) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/signup', user, options)
      .map(res => {
        let user = new User(res.json());
        this.setUser(user);
        return user;
      }).catch(err => {
        throw err.json();
      });
  }

  login(user: User) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/login', user, options)
      .map(res => {
        let user = new User(res.json());
        this.setUser(user);
        return user;
      }).catch(err => {
        throw err.json();
      });
  }

  logout() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/logout', {}, options)
    .map(res => {
      this.setUser();
      return null;
    });
  }

  me() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + '/profile', options)
      .map(res => {
        let user = new User(res.json());
        this.setUser(user);
        return user;
      }, (err) => {
        if(err.status=== 404) {
          this.setUser();
        }
      });
  }

  initialize() {
    if (!this.initialized) {
      this.initialized = true;
      this.me().subscribe();
    }
  }

}
