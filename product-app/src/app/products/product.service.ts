// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// export interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
//   image: string;
// }

// @Injectable({ providedIn: 'root' })
// export class ProductService {
//   constructor(private http: HttpClient) {}

//   getProducts(): Observable<Product[]> {
//     return this.http.get<Product[]>('assets/products.json');
//   }

//   getProductById(id: number): Observable<Product | undefined> {
//     return this.getProducts().pipe(
//       map(products => products.find(p => p.id === id))
//     );
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/products.json');
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
