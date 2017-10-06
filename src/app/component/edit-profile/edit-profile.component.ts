import { Subscription } from 'rxjs/Rx';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, OnDestroy {

  user: User;
  loading = true;

  subscriptions = [];

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    let subscription = this.auth.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
    })
    this.subscriptions.push(subscription);
  }

  save(form) {

  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}
