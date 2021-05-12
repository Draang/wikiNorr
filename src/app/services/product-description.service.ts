import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductDescriptionService {
  private api: string = 'https://fr.openfoodfacts.org/api/v0/product';

  constructor(private httpClient: HttpClient) {}

  getProductDescriptionById(id: string): Observable<any> {
    return this.httpClient.get(this.api + '/' + id);
  }

  getApiURI(): string {
    return this.api;
  }
}
