import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public service:AuthService) {

  }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }


  onLogin(){
    this.service.login();
  }

  onLogout(){
    this.service.logout();
  }
}
