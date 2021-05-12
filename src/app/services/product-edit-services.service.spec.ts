import { TestBed } from '@angular/core/testing';

import { ProductEditServicesService } from './product-edit-services.service';

describe('ProductEditServicesService', () => {
  let service: ProductEditServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEditServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
