import { Component, OnInit,Input } from '@angular/core';
import { SheltersService } from '../../services/shelters.service';
import { AuthService } from '../../services/auth.service';
import { AnimalsService } from '../../services/animals.service';

import { Animals } from '../../model/Animals.model';



@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.css']
})
export class AnimallistComponent implements OnInit {
  @Input () currentShelter;
  animalList: object[];

  constructor(private shelter:SheltersService, private animals:AnimalsService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(){
    this.animals.getAnimals().subscribe((Animals)=> {
      this.animalList=Animals;
    });
  }

}
