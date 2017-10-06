import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000';

@Injectable()
export class AnimalsService {

  constructor(private http: Http) { }

  getAnimals() {
    let options = new RequestOptions();
    options.withCredentials = true;    
    return this.http.get(baseUrl + '/animals', options)
      .map((res) => res.json());
  }

}
