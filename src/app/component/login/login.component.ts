import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  
  login(form) {
    this.error = null;
    this.submitted = true;
    if (!form.valid) {
      return false;
    }
    this.auth.login(this.user).subscribe(
      (user) => { 
        console.log (this.user.id);
        this.router.navigate(['/profile'])
      },
      (err) => {
        this.error = (err && err.error) ? err.error : 'Unexpected error, please try again.';
      } 
    );
 
  }

}
