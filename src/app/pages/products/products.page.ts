import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  results: any;
  searchTerm: string = '';
  page: number = 1;
  constructor(public productService: ProductService) {}

  ngOnInit() {
    this.getDataProds();
  }
  getDataProds() {
    this.productService.getDataProd(this.searchTerm).subscribe((r) => {
      this.results = r['products'];
    });
  }
  loadMore(event) {
    this.page=this.page+1;
    this.productService.getDataProd(this.searchTerm,this.page).subscribe((r) => {
      this.results = r['products'];
    });
    event.target.complete();
  }
}
