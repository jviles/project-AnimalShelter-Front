import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { adopter } from '../model/adopter.model';

@Injectable()
export class AdopterserviceService {
  BASE_URL: string = 'http://localhost:3000';
  

  constructor(private http: Http) { }

//Aquest per ficar nous adptadors
postadopter(adopter:adopter) {
  let options = new RequestOptions();
  options.withCredentials = true;
  console.log("post",adopter);
  return this.http.post(`${this.BASE_URL}/animal/animalprofile`, adopter,options)
  .map((res) => res.json());
}

getadopter() {
  let options = new RequestOptions();
  options.withCredentials = true;    
  return this.http.get(`${this.BASE_URL}/animal/animalprofile`, options)
    .map((res) => res.json());
}

}
