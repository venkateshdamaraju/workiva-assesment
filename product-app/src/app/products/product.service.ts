import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  // Fetch the products from the JSON file
  // Using Observable to handle asynchronous data
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products.json');
  }

  // Fetch a single product by ID
  // Using map operator to transform the data and Observable to return a single product
  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
