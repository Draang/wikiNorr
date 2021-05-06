import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BrandsService } from '../../services/brands.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-marques',
  templateUrl: './marques.page.html',
  styleUrls: ['./marques.page.scss'],
})
export class MarquesPage implements OnInit {
  result: any;
  constructor(
    public brandsService: BrandsService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.getBrands();
  }
  youclick(e) {
    this.router.navigate([`/products/${e.id}`]);
  }
  getBrands() {
    this.brandsService.getBrands().subscribe((r) => {
      this.result = r['tags'].slice(0, 50);
    });
  }
}
