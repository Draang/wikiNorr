import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user:any=JSON.parse(localStorage.getItem('user'));
  flag: boolean = false;
  public appPages = [
    { title: 'Products', url: '/products', icon: 'fast-food' },
    { title: 'Marques', url: '/marques', icon: 'mail' },
  ];
  constructor(public auth: AuthService) {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.user = JSON.parse(localStorage.getItem('user')).email;
      
    } 
  }
}
