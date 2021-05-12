import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDescriptionService } from 'src/app/services/product-description.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public product: any;
  public images: string[] = [];
  public isValid: boolean = false;
  public productCode: string;

  constructor(
    public productDescriptionService: ProductDescriptionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductDescription();
  }

  getProductDescription() {
    // get Product Code
    // sets the code (just in case)
    this.productCode = this.route.snapshot.paramMap.get('id');
    let productCode: string = window.location.pathname.replace('/product/', '');
    // let productCode: string = '3033710065066'; // ProductCode of Nesquik 250g

    // suscribe to API
    this.productDescriptionService
      .getProductDescriptionById(productCode)
      .subscribe((data) => {
        // checks for product existance
        if (data.product) this.isValid = true;
        // sets the data recieved from API
        this.product = data.product;
        // get image according to product.nutriscore_grade
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
        console.log(this.product);
      });
  }

  redirectToEdit() {
    this.router.navigateByUrl('product-edit/' + this.productCode);
  }
}
