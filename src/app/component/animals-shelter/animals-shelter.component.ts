import { Component, OnInit, Input } from '@angular/core';
import { Animals } from '../../model/Animals.model';
import { AnimalsService } from '../../services/animals.service';


@Component({
  selector: 'app-animals-shelter',
  templateUrl: './animals-shelter.component.html',
  styleUrls: ['./animals-shelter.component.css']
})
export class AnimalsShelterComponent implements OnInit {
  @Input() shelterId: string;
  animalList: Array<Object[]>;
 

  constructor(
    private animalsService:AnimalsService
  ) { }

  ngOnInit() {

   this.getAnimalByShelterId();
     
  }

  getAnimalByShelterId(){
    this.animalsService.getAnimalByShelterId(this.shelterId).subscribe((Animals)=> {
      this.animalList = Animals;
      console.log(this.animalList);
      console.log (this.shelterId);
    });
    
  }

}
