import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    public productService: ProductService,
    private router: Router
  ) {
    if (this.aRouter.snapshot.paramMap.get('marque') != null) {
      this.searchTerm = this.aRouter.snapshot.paramMap
        .get('marque')
        .replace(/-/g, ' ');
    }
  }

  ngOnInit() {
    this.getDataProds();
  }
  getDataProds() {
    this.productService.getDataProd(this.searchTerm).subscribe((r) => {
      this.results = r['products'];
      console.log(this.results);
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

  redirectToProduct(id: string) {
    console.log('id:' + id);
    this.router.navigateByUrl('product/' + id);
  }
}
