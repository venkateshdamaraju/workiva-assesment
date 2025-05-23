import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [CommonModule, RouterModule]
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  Math = Math;            
  Number = Number;   

  // Inject the ActivatedRoute and ProductService in the constructor
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  // Use the ngOnInit, a life cycle hook to fetch the product details
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (data) => this.product = data,
      error: () => console.error('Error loading product detail')
    });
  }
}
