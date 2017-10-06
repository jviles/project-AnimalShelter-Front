import { Component, OnInit } from '@angular/core';

import { User } from './model/user.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = null;
  loading = true;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.me().subscribe((user) => {
      this.user = user;
      this.loading = false;
    });
    this.auth.userChange$.subscribe((user) => this.user = user);
  }
}
