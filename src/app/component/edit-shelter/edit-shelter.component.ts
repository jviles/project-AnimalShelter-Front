import { Form } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SheltersService } from '../../services/shelters.service';
import { AuthService } from '../../services/auth.service';

import { User } from '../../model/user.model';
import { Shelter } from '../../model/shelter.model';
import { ShelterlistComponent } from '../shelterlist/shelterlist.component';



@Component({
  selector: 'app-edit-shelter',
  templateUrl: './edit-shelter.component.html',
  styleUrls: ['./edit-shelter.component.css']
})
export class EditShelterComponent implements OnInit {
  @Input () currentUser;
  

  shelterList : Object [];
  results: string; 
  loading = true; // No entenc molt que vol fer l'Andre amb aquestes variables
  submitted: boolean;//Suposso que activar i desactivar el Form per assegurar que esta login
  error: string;

  // HERE HERE HERE

  constructor(
    private shelter: SheltersService,
  ) { }

  ngOnInit() {
       /* susbcribe to user service to get user ((user) => {
        this.sheltersService.getShelterByUserId(user.id).susbcribe((shelter) => {
        this.loading = false;
        this.shelter = shelter;*/
       this.getShelters();        
      }


  getShelters() {
    this.shelter.getShelters()
    .subscribe((Shelter) => {
     this.shelterList = Shelter;
  });
/* Preguntar a l'Andre perque no funciona aixi
  save(form) {
      
      this.shelter.createShelter(this.newshelter)
      .subscribe(res => {
        this.results = res;
      this.getShelters();
      });
  }*/
  /*
  handleNewShelter(Form) {
    const newShelter = {sheltername: form.value.sheltername,direction: form.value.direction,number: form.value.number,zipcode: form.value.zipcode};
    this.shelter.createShelter(newShelter).subscribe(res => {
    this.results = res;
    console.log (newShelter);
    this.getShelters();
    });
  }
  */
  }
}
