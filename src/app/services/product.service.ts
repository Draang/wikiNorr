import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https://fr.openfoodfacts.org/';
  constructor(private http: HttpClient) {}

  getDataProd(): Observable<any> {
    return this.http.get(
      `${this.url}cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tagtype_1=nutrition_grades&json=true`
    );
  }
}
