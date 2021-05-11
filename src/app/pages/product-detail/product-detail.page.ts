import { Component, OnInit } from '@angular/core';
import { ProductDescriptionService } from 'src/app/services/product-description.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public product: any;
  public images: string[] = [];

  constructor(public productDescriptionService: ProductDescriptionService) {}

  ngOnInit() {
    this.getProductDescription();
  }

  getProductDescription() {
    let productCode: string = '3033710065066'; // ProductCode of Nesquik 250g

    this.productDescriptionService
      .getProductDescriptionById(productCode)
      .subscribe((data) => {
        this.product = data.product;
        // images from data
        switch (this.product.nutriscore_grade) {
          case 'a':
            this.images[0] =
              'https://static.openfoodfacts.org/images/attributes/nutriscore-a.svg';
            break;
          case 'b':
            this.images[0] =
              'https://static.openfoodfacts.org/images/attributes/nutriscore-b.svg';
            break;
          case 'c':
            this.images[0] =
              'https://static.openfoodfacts.org/images/attributes/nutriscore-c.svg';
            break;
          case 'd':
            this.images[0] =
              'https://static.openfoodfacts.org/images/attributes/nutriscore-d.svg';
            break;
          case 'e':
            this.images[0] =
              'https://static.openfoodfacts.org/images/attributes/nutriscore-e.svg';
            break;

          default:
            break;
        }
        console.log(this.images);
        console.log(this.product);
      });
  }
}
