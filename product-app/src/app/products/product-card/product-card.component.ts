import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [CommonModule]
})
export class ProductCardComponent {
  product!: Product;

  // Inject the ActivatedRoute in the constructor to access route data
  constructor(private route: ActivatedRoute) {
    const data = this.route.snapshot.data['testProduct'];
    if (data) {
      this.product = data;
    }
  }

  onViewDetails(): void {
    alert(`View Details for ID: ${this.product.id}`);
  }
}
