import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SheltersService } from '../../services/shelters.service';
import { AuthService } from '../../services/auth.service';
import { Shelter } from '../../model/shelter.model';
import { User } from '../../model/user.model';



@Component({
  selector: 'app-shelterlist',
  templateUrl: './shelterlist.component.html',
  styleUrls: ['./shelterlist.component.css']
})
export class ShelterlistComponent implements OnInit {
  shelters: Object[];
  User: string;
  
  constructor(private route: ActivatedRoute,private sheltersService: SheltersService, private authService: AuthService) { }

  ngOnInit() {
    this.sheltersService.getShelters().subscribe((shelters) => {
      this.shelters = shelters;
    });
  }

}
