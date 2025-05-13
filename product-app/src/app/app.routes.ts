import { Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductCardComponent } from './products/product-card/product-card.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailComponent },

  {
    path: 'test-card',
    component: ProductCardComponent,
    data: {
      testProduct: {
        id: 999,
        name: 'Test MacBook Air',
        price: 1299,
        description: 'Test product description',
        imageUrl: 'https://example.com/test-macbook-air.jpg',
        rating: 4.5,
        inStock: true
      }
    }
  }
];