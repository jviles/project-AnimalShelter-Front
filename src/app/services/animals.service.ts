import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Animals } from '../model/Animals.model';

//const baseUrl = 'http://localhost:3000'; Tin problemes amb aquest

@Injectable()
export class AnimalsService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getAnimals() {
    let options = new RequestOptions();
    options.withCredentials = true;    
    return this.http.get(`${this.BASE_URL}/animal`, options)
      .map((res) => res.json());
  }

  getAnimalByShelterId(shelterId) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(`${this.BASE_URL}/animal/by-shelter`+ shelterId, options)
      .map((res) => res.json());
  }
  
  //Aquest per ficar nous animalets
  postNewAnimal(animal:Animals) {
    let options = new RequestOptions();
    options.withCredentials = true;
    console.log("post",animal);
    return this.http.post(`${this.BASE_URL}/animal`, animal,options)
    .map((res) => res.json());
  }
}
