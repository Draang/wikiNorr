import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BrandsService } from '../../services/brands.service';
@Component({
  selector: 'app-marques',
  templateUrl: './marques.page.html',
  styleUrls: ['./marques.page.scss'],
})
export class MarquesPage implements OnInit {
  result: any;
  constructor(public brandsService: BrandsService) {}

  ngOnInit() {
    this.getBrands();
  }
  getBrands() {
    this.brandsService.getBrands().subscribe((r) => {
      console.log(r['tags']);
      this.result = r['tags'].slice(20);
    });
  }
}
