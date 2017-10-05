import { Component, OnInit } from '@angular/core';
import { User } from '../../model/events/user.model';
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

  error: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  
  login() {
    this.error = null;
    this.auth.login(this.user).subscribe(
      (user) => this.user = user,
      (err) => this.error = err
    );
  }

}
