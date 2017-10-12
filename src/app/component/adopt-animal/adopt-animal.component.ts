import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { AdopterserviceService } from '../../services/adopterservice.service';
import { AnimalsService } from '../../services/animals.service';

import { adopter } from '../../model/adopter.model';
import { Animals } from '../../model/Animals.model';


@Component({
  selector: 'app-adopt-animal',
  templateUrl: './adopt-animal.component.html',
  styleUrls: ['./adopt-animal.component.css']
})
export class AdoptAnimalComponent implements OnInit {
  @Input() animal: Animals;
  
  @Input() isNew: boolean;
  @Output() onSave = new EventEmitter<object>();

  adopter: adopter= new adopter();
  animaladopted: object [];

  constructor(
    private animalsService:AnimalsService,
    private adopterService:AdopterserviceService
  ) { }

  ngOnInit() {

    this.getAnimalByShelterId();
  }

  getAnimalByShelterId(){
    this.animalsService.getAnimalByShelterId(this.animal.shelterId).subscribe((Animals)=> {
      this.animaladopted=Animals;
    });
  }


  handleNewAdopter() {
    
        if (this.isNew) {
            this.adopterService.postadopter(this.adopter).subscribe((res) => {
              console.log('SAVED');
              this.onSave.emit(res);
            });
      }
    }
}

