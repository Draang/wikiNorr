import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDescriptionService } from 'src/app/services/product-description.service';
import { ProductEditServicesService } from 'src/app/services/product-edit-services.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.page.html',
  styleUrls: ['./product-edit.page.scss'],
})
export class ProductEditPage implements OnInit {
  ionicForm: FormGroup;
  productCode: string;

  constructor(
    public formBuilder: FormBuilder,
    private dbEditonService: ProductEditServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      denomination: [''],
      quantity: [''],
      nutriscore: [''],
    });
  }

  onSubmit() {
    console.log(this.ionicForm.value);

    // get Product Code
    this.productCode = this.route.snapshot.paramMap.get('id');

    // submit to db
    this.dbEditonService
      .create2(this.productCode, this.ionicForm.value)
      .then((res) => {
        console.log(res);
        this.ionicForm.reset();
        this.router.navigate(['']);
      });
  }
}
