import { Component, OnInit } from '@angular/core';

import { SheltersService } from '../../services/shelters.service';
@Component({
  selector: 'app-shelters-page',
  templateUrl: './shelters-page.component.html',
  styleUrls: ['./shelters-page.component.css']
})
export class SheltersPageComponent implements OnInit {

  shelters: Object[];

  constructor(private sheltersService: SheltersService) { }

  ngOnInit() {
    this.sheltersService.getShelters().subscribe((shelters) => {
      this.shelters = shelters;
    });
  }

}
