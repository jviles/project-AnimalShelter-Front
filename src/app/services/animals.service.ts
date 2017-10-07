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
    return this.http.get(`${this.BASE_URL}/animals`, options)
      .map((res) => res.json());
  }
  // Tinc la Id del animals per desprès relacionar-ho amb el shelter
  // en algun futur ja ho fare ara ja m'estic tornant boig ho copio per tenir-ho
  get(id) {
    return this.http.get(`${this.BASE_URL}/animals/${id}`)
      .map((res) => res.json());
  }
  //Puto internete que no funciona tinc que piratejar mes xarxes
  //Aquest per ficar nous animalets
  postNewAnimal(Animal) {
    console.log(Animal);
    return this.http.post(`${this.BASE_URL}/animals`, Animals)
    .map((res) => res.json());
  }
}
