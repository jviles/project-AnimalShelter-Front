import { Component, OnInit, OnDestroy } from '@angular/core';


import { SheltersService } from '../../services/shelters.service';
import { AuthService } from '../../services/auth.service';
import { AnimalsService } from '../../services/animals.service';

import { Shelter } from '../../model/shelter.model';
import { User } from '../../model/user.model';
import { Animals } from '../../model/Animals.model';



@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  loading = false;
  subscriptions = [];
  currentUser: User;
  shelter: Shelter;
  
  newShelter: Shelter;

  animalssubscription = [];
  currentShelter: Shelter;
  animal: Animals;
  newAnimal: Animals;

  constructor(
    private authService: AuthService,
    private shelterService: SheltersService,
    private animalService:AnimalsService
  ) { }

  ngOnInit() {
    // works only when navigating
    let currentUser = this.authService.getUser();
    this.setUser(currentUser);
    // works only when refreshing the page
    let subscription = this.authService.userChange$.subscribe((user) => this.setUser(user));
    this.subscriptions.push(subscription);
    //Include animal
    let animalsubscription = this.shelterService.shelterChange$.subscribe((shelter) => this.setShelter(shelter));
    this.animalssubscription.push(animalsubscription);
  }

  setUser(user) {
    this.currentUser = user;
    
    if (user) {
      // find out if this user already has a shelter
      this.shelterService.getShelterByUserId(user.id).subscribe((shelter) => {
        this.shelter = shelter;
        this.loading = false;
        if (!this.shelter) {
          this.newShelter = new Shelter();
        }
      });
    }
  }

  handleSaveShelter() {
    if (!this.shelter) {
      this.shelter = this.newShelter;
    }
  }

  setShelter(shelter) {
    this.currentShelter = shelter;
    
    if (shelter) {
      
      this.animalService.getAnimalByShelterId(shelter.id).subscribe((animal) => {
        this.animal = animal;
        this.loading = false;
        if (!this.shelter) {
          this.newAnimal = new Animals();
        }
      });
    }
  }
  /*Quina diferencia hi ha entre el save emiter i el $*/
  handleNewAnimal() {
    if (!this.animal) {
      this.animal = this.newAnimal;
    }
  }
  
  ngOnDestroy() {
    // unsubscribe if we navigate away from this page
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
