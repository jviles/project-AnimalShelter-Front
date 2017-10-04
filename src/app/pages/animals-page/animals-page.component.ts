import { Component, OnInit } from '@angular/core';

import { AnimalsService } from '../../services/animals.service';

@Component({
  selector: 'app-animals-page',
  templateUrl: './animals-page.component.html',
  styleUrls: ['./animals-page.component.css']
})
export class AnimalsPageComponent implements OnInit {

  animals: Object[];

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
    this.animalsService.getAnimals().subscribe((animals) => {
      this.animals = animals;
    });

  }

}
