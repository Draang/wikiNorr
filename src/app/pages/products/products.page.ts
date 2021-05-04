import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ConditionalExpr } from '@angular/compiler';
import { map, tap, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  results: any;
  searchTerm: string = '';
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.getDataProds();
  }
  getDataProds() {
    this.productService.getDataProd().subscribe((r) => {
      this.results = r['products'];
    });
  }
  getSearch() {
    this.productService.getSearch(this.searchTerm).subscribe((r) => {
      this.results = r['products'];
    });
  }
}
