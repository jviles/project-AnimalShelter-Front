import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User({
    username: '',
    password: ''
  });

  submitted: boolean;
  error: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  signup(form) {
    this.error = null;
    this.submitted = true;
    if (!form.valid) {
      return false;
    }
    this.auth.signup(this.user).subscribe(
      (user) => { 
        console.log(user);
      },

      (err) => this.error = err
    );
  }

}
