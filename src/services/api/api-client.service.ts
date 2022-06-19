import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { PaginatedProducts } from 'src/models/product';
import { paginationParams } from 'src/models/paginationParams';
@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  private API_URL = environment.apiURL;
  constructor(private http: HttpClient) {
    // this.getProducts().subscribe((list) => {
    //   console.log(list);
    // });
  }

  getProducts(args?: paginationParams): Observable<PaginatedProducts> {
    let parameters: paginationParams = {
      limit: 10,
      pass: 0,
      search: '',
      ...args,
    };
    return this.http.get<PaginatedProducts>(
      `${this.API_URL}/products?limit=${parameters.limit}&skip=${
        parameters.pass
      }${parameters.search ? '?q=' + parameters.search : ''}`
    );
  }

  // provided api doesn't allow search in specific category
  getCategoryProducts(category: string): Observable<PaginatedProducts> {
    return this.http.get<PaginatedProducts>(
      `${this.API_URL}/products/category/${category}`
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/products/categories`);
  }
}
