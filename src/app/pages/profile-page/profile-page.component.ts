import { Component, OnInit, OnDestroy } from '@angular/core';


import { SheltersService } from '../../services/shelters.service';
import { AuthService } from '../../services/auth.service';
import { Shelter } from '../../model/shelter.model';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  loading = false;
  subscriptions = [];
  currentUser: User;
  shelter: Shelter;
  newShelter: Shelter;

  constructor(
    private authService: AuthService,
    private shelterService: SheltersService,
  ) { }

  ngOnInit() {
    // works only when navigating
    let currentUser = this.authService.getUser();
    this.setUser(currentUser);
    // works only when refreshing the page
    let subscription = this.authService.userChange$.subscribe((user) => this.setUser(user));
    this.subscriptions.push(subscription);
  }

  setUser(user) {
    this.currentUser = user;
    if (user) {
      // find out if this user already has a shelter
      this.shelterService.getShelterByUserId(user.id).subscribe((shelter) => {
        this.shelter = shelter;
        this.loading = false;
        if (!this.shelter) {
          this.newShelter = new Shelter();
        }
      });
    }
  }

  handleSaveShelter() {
    if (!this.shelter) {
      this.shelter = this.newShelter;
    }
  }

  ngOnDestroy() {
    // unsubscribe if we navigate awawy from this page
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
