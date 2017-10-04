import { Component, OnInit } from '@angular/core';

import { User } from '../../model/events/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User({
    username: '',
    email: '',
    password: ''
  });

  error: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }

}
