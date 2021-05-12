import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'https://fr.openfoodfacts.org/';
  //https://world.openfoodfacts.org/cgi/search.pl?search_terms=&search_simple=1&json=1
  //https://fr.openfoodfacts.org/search.pl?search.pl?search_terms=&json=1&page=1
  constructor(private http: HttpClient) {}

  getDataProd(categorie: string = '', page: number = 1): Observable<any> {
    if (categorie === '') {
      return this.http.get(
        `${this.url}cgi/search.pl?search_terms=&search_simple=1&json=1&page=${page}`
      );
    } else {
      return this.http.get(
        `${this.url}cgi/search.pl?search_terms=${categorie.replace(
          /\s/g,
          '+'
        )}&search_simple=1&json=1&page=${page}`
      );
    }
  }
  
}
