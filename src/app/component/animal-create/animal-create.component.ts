import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AnimalsService } from '../../services/animals.service';
import { SheltersService } from '../../services/shelters.service';
import { Animals } from '../../model/Animals.model';
import { Shelter } from '../../model/shelter.model';


@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css']
})
export class AnimalCreateComponent implements OnInit {

  @Input() shelterId: string;
  @Input() isNew: boolean;
  @Output() onSave = new EventEmitter();

  animal: Animals= new Animals ();

  
  results: string;
  constructor(
    private animalService:AnimalsService,
    private shelterService: SheltersService

    ) { }

  ngOnInit() {

  }


  handleNewAnimal() {

    if (this.isNew) {
      this.animal.shelterId = this.shelterId;
        this.animalService.postNewAnimal(this.animal).subscribe(() => {
          console.log('SAVED');
          this.onSave.emit();
        });
  }
}
}
