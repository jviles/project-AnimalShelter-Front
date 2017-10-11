import { Component, OnInit } from '@angular/core';

import { AnimalsService } from '../../services/animals.service';
import { Animals } from '../../model/Animals.model';



@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.css']
})
export class AnimallistComponent implements OnInit {
  
  animalList: object[];
  
  constructor(
    
    private animalsService:AnimalsService)
   { }
  
  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(){
    this.animalsService.getAnimals().subscribe((Animals)=> {
      this.animalList=Animals;
    });
  }



}
