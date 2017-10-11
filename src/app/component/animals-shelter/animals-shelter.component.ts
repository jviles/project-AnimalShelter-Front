import { Component, OnInit, Input } from '@angular/core';
import { Animals } from '../../model/Animals.model';
import { AnimalsService } from '../../services/animals.service';


@Component({
  selector: 'app-animals-shelter',
  templateUrl: './animals-shelter.component.html',
  styleUrls: ['./animals-shelter.component.css']
})
export class AnimalsShelterComponent implements OnInit {
  @Input() animal: Animals;

  animalList: object[];
  

  constructor(
    private animalsService:AnimalsService
  ) { }

  ngOnInit() {
    this.getAnimalByShelterId();
  }

  getAnimalByShelterId(){
    this.animalsService.getAnimalByShelterId(this.animal.shelterId).subscribe((Animals)=> {
      this.animalList=Animals;
    });
  }

}
