import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEditServicesService } from 'src/app/services/product-edit-services.service';

@Component({
  selector: 'app-view-editions',
  templateUrl: './view-editions.page.html',
  styleUrls: ['./view-editions.page.scss'],
})
export class ViewEditionsPage implements OnInit {
  public items: any;
  isValid = false;

  constructor(
    private dbEditonService: ProductEditServicesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.dbEditonService.getList2().subscribe((data) => {
      console.log(data);

      this.items = data.map((e) => {
        return {
          id: e.payload.doc.data()['id'],
          nutriscore: e.payload.doc.data()['nutriscore'],
          denomination: e.payload.doc.data()['denomination'],
          quantity: e.payload.doc.data()['quantity'],
        };
      });
    });

    this.isValid = true;
  }
}
