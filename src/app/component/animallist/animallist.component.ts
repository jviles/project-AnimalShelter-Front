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
  
  animalList: object[];
  results: string;

  constructor(private shelter:SheltersService, private animals:AnimalsService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(){
    this.animals.getAnimals().subscribe((Animals)=> {
      this.animalList=Animals;
    });
  }

  handleNewAnimal(form) {
    const newAnimal = {
      name: form.value.name,
      image: form.value.image,
      type: form.value.type,
      age: form.value.age,
      size: form.value.size,
      color: form.value.color,
      sex: form.value.sex,
      breed: form.value.breed,
      microchip: form.value.microchip,
      vaccinated: form.value.vaccinated,
      healthcare: form.value.healthcare,
      energylevel: form.value.energylevel,
      sociable: form.value.sociable,
      hates: form.value.hates,
      loves: form.value.loves,
      goingoutysociability: form.value.goingoutysociability,
      alittleofmypast: form.value.alittleofmypast
    };
    this.animals.postNewAnimal(newAnimal).subscribe(res => {
    this.results = res;
    console.log (newAnimal);
    this.getAnimals();
    });
  }

}
