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

 /* handleNewAnimal(form) {
    const newAnimal = {
      name: form.value.name,
      image: form.value.image,
      type: form.value.type,
      age: form.value.age,
      size: form.value.size,
      color: form.value.color,
      sex: form.value.sex,
      breed: form.value.breed,
    
      energylevel: form.value.energylevel,
      sociable: form.value.sociable,
    
    };
    this.animalService.postNewAnimal(newAnimal).subscribe(res => {
    this.results = res;
    console.log (newAnimal);  
    });*/
    
    //Aqui utilitzes l'Output que tens a profile

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
