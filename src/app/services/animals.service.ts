import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000';

@Injectable()
export class AnimalsService {

  constructor(private http: Http) { }

  getAnimals() {
    return this.http.get(baseUrl + '/animals')
      .map((res) => res.json());
  }

}
