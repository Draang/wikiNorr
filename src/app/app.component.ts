import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: string = '';
  flag: boolean = false;

  public appPages = [
    { title: 'Products', url: '/products', icon: 'fast-food' },
    { title: 'Marques', url: '/marques', icon: 'pricetags' },
  ];
  constructor(public auth: AuthService) {}
  getFlag() {
    if (JSON.parse(localStorage.getItem('user')) != null) {
      this.user = JSON.parse(localStorage.getItem('user')).email;
      return false;
    } else if (JSON.parse(localStorage.getItem('user')) == null) {
      
      
      return true;
    }
  }
}
