import { Form } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() shelter: Shelter;
  @Input() isNew: boolean;
  @Output() onSave = new EventEmitter<string>();

  loading = true; // No entenc molt que vol fer l'Andre amb aquestes variables
  submitted: boolean; //Suposso que activar i desactivar el Form per assegurar que esta login
  error: string;

  // HERE HERE HERE

  constructor(
    private shelterService: SheltersService,
  ) { }

  ngOnInit() {
    /* susbcribe to user service to get user ((user) => {
    this.sheltersService.getShelterByUserId(user.id).susbcribe((shelter) => {
    this.loading = false;
    this.shelter = shelter;*/      
  }
  
  save() {
    if (this.isNew) {
      this.shelterService.createShelter(this.shelter).subscribe(() => {
        console.log('SAVED');
        this.onSave.emit();
      });
    }
    else {
      // this.shelterService.updateShelter(this.shelter).subscribe(() => {
      //   console.log('SAVED');
      //   this.onSave.emit();
      // });
    }
  }
  
}

