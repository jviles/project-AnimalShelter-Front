import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000';

@Injectable()
export class SheltersService {

  constructor(private http: Http) { }

  getShelters() {
    return this.http.get(baseUrl + '/shelters')
      .map((res) => res.json());
  }

  

}
