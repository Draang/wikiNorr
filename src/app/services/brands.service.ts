import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BrandsService {
url='https://fr.openfoodfacts.org/brands.json'
  constructor(private http:HttpClient) { }
  getBrands():Observable<any>{
    return this.http.get(this.url)
  }
}
