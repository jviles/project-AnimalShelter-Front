import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

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
        this.router.navigate(['/profile'])
      },
      (err) => {
        this.error = (err && err.error) ? err.error : 'Unexpected error, please try again.';
      } 
    );
  }

}
