import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000';

import { Shelter } from '../model/shelter.model';

@Injectable()
export class SheltersService {

  constructor(private http: Http) { }

  // HERE HERE HERE

  getShelters() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + '/shelters', options)
      .map((res) => res.json());
  }

  getShelterByUserId(userId) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl+ '/shelter',userId)
    .map((res) => res.json());
    // return this.http.get(baseUrl + '/shelters/by-user/' + userId, shelter, options)

    // NOTE: needs to create express route get('/by-user/:userId', (req, res, next) .... will find and return shelter where userId: req.params.userId
  }

  createShelter(shelter: Shelter) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl+ '/shelters', options)
    .map((res) => res.json());
    // return this.http.post(baseUrl + '/shelters', shelter, options)

    // NOTE: needs to create express route post('/', (req, res, next) .... needs to set the .userId = to the session user id AND THEN save the shelter
  }

  updateShelter(shelter: Shelter) {
    let options = new RequestOptions();
    options.withCredentials = true;
    // return this.http.put(baseUrl + '/shelters/' + shelter.id, shelter, options) 
    
    // NOTE: needs to create express route put('/:id', (req, res, next) ... just Shelter.findAndUpdate()
  }

}
