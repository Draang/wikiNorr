import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {}
  logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then((res) => {
        this.router.navigate(['/products']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
