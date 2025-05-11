import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductCardComponent } from './products/product-card/product-card.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app_product';

  sampleProduct = {
    id: 1,
    name: 'Test Product',
    price: 123,
    description: 'This is a sample product for testing.'
  };

  handleViewDetails(productId: number) {
    console.log('View details clicked for product ID:', productId);
  }
}
