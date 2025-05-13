// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterModule } from '@angular/router';
// import { ProductService, Product } from '../product.service';
// import { HttpClientModule } from '@angular/common/http';
//import { ProductCardComponent } from '../product-card/product-card.component';

// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [CommonModule, ProductCardComponent],
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private service: ProductService, private router: Router) {}

//   ngOnInit() {
//     this.service.getProducts().subscribe(data => this.products = data);
//   }

//   goToDetail(id: number) {
//     this.router.navigate(['/products', id]);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule]  // ✅ Required for *ngFor, *ngIf, etc.
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: () => console.error('Error loading products')
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
