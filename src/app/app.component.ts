import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Products', url: '/products', icon: 'fast-food' },{title:'Marques',url:'/marques',icon:'mail'}
  ];
  constructor() {}
}
