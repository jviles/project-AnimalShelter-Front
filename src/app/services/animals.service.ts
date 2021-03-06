import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Animals } from '../model/Animals.model';



@Injectable()
export class AnimalsService {

  private animal: Animals;
  private animalChange: Subject<Animals | null> = new Subject();

  animalChange$ = this.animalChange.asObservable();

  BASE_URL: string = 'http://localhost:3000';
  
  constructor(private http: Http) { }

  getAnimals() {
    let options = new RequestOptions();
    options.withCredentials = true;    
    return this.http.get(`${this.BASE_URL}/animal`, options)
      .map((res) => res.json());
  }

  getAnimalByShelterId(shelterId:string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(`${this.BASE_URL}/animal/by-shelter/`+ shelterId, options)
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
