import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  
  logout() {
    this.auth.logout().subscribe();
  }
}
