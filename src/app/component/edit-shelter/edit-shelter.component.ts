import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.model';
import { Shelter } from '../../model/shelter.model';
import { SheltersService } from '../../services/shelters.service';


@Component({
  selector: 'app-edit-shelter',
  templateUrl: './edit-shelter.component.html',
  styleUrls: ['./edit-shelter.component.css']
})
export class EditShelterComponent implements OnInit {
  @Input () currentUser;

  newshelter= new Shelter ({

    sheltername: '',
    direction: '',
    number: '',
    zipcode: '',
  })
  results: string; 
  loading = true;
  submitted: boolean;
  error: string;

  // HERE HERE HERE
  /*private user:AuthService,*/
  constructor(private user:AuthService,private shelter: SheltersService) { }

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
     this.newshelter = Shelter;
  });
  
  /* No se si això es una anada de xamba meva pero crec que es faria aixi ficar el id de usuari al shelter
   
  handlegetUserId (userId: string){
    this.shelter.postUser(userId).subscribe( res =>{
      this.results = res;
    });
  } */
  
}
}
