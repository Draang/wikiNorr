import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
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
      console.log(r['products'])
      this.results = r['products'];
    });
  }
}
