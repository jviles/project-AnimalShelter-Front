import { Component, OnInit } from '@angular/core';
import { SheltersService } from '../../services/shelters.service';
import { Shelter } from '../../model/shelter.model';


@Component({
  selector: 'app-shelterlist',
  templateUrl: './shelterlist.component.html',
  styleUrls: ['./shelterlist.component.css']
})
export class ShelterlistComponent implements OnInit {
  shelters: Object[];
  
    constructor(private sheltersService: SheltersService) { }
  
    ngOnInit() {
      this.sheltersService.getShelters().subscribe((shelters) => {
        this.shelters = shelters;
      });
    }
  
  }
