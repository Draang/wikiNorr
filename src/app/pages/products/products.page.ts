import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  results: any;
  searchTerm: string = '';
  page: number = 1;
  constructor(
    private aRouter: ActivatedRoute,
    public productService: ProductService
  ) {
    if(this.aRouter.snapshot.paramMap.get('marque')!=null){
      this.searchTerm=this.aRouter.snapshot.paramMap.get('marque')
    }
    
  }

  ngOnInit() {
    this.getDataProds();
  }
  getDataProds() {
    this.productService.getDataProd(this.searchTerm).subscribe((r) => {
      this.results = r['products'];
    });
  }
  loadMore(event) {
    this.page = this.page + 1;
    this.productService
      .getDataProd(this.searchTerm, this.page)
      .subscribe((r) => {
        this.results = r['products'];
      });
    event.target.complete();
  }
}
