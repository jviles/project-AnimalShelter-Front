import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const baseUrl = 'http://localhost:3000';

import { Shelter } from '../model/shelter.model';

@Injectable()
export class SheltersService {
  private initialized: boolean;
  private shelter: Shelter;
  private shelterChange: Subject<Shelter | null> = new Subject();

  constructor(private http: Http) { }
  
    // Observable user stream
    shelterChange$ = this.shelterChange.asObservable();

  

  getShelters() {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + '/shelter', options)
      .map((res) => res.json());
  }

  getShelterByUserId(userId) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(baseUrl + '/shelter/by-user/' + userId, options)
      .map((res) => res.json());
  }

  createShelter(shelter: Shelter) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(baseUrl + '/shelter', shelter, options)
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
