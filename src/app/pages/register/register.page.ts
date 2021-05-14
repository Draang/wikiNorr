import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(public authService: AuthService, public router: Router) {
  
    if (JSON.parse(localStorage.getItem('user')) != null) {
      
      this.router.navigate(['/products']);
    }
  }

  ngOnInit() {}
  signUp(email, password) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
        // Do something here
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
