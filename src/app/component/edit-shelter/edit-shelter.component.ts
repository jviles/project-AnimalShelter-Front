import { Component, OnInit } from '@angular/core';

import { Shelter } from '../../model/shelter.model';

@Component({
  selector: 'app-edit-shelter',
  templateUrl: './edit-shelter.component.html',
  styleUrls: ['./edit-shelter.component.css']
})
export class EditShelterComponent implements OnInit {

  shelter: Shelter;
  loading = true;

  // HERE HERE HERE

  constructor(/*private auth AND shelterService ... */) { }

  ngOnInit() {
    // susbcribe to user service to get user ((user) => {
      // this.shelterService.getShelterByUserId(user.id).susbcribe((shelter) => {
        // this.loading = false;
        // this.shelter = shelter,
      //})
  }

}
