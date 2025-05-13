// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
// import { Product } from '../product.model';

// @Component({
//   selector: 'app-product-card',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './product-card.component.html',
//   styleUrls: ['./product-card.component.css']
// })
// export class ProductCardComponent {
//   @Input() product!: Product;
//   @Output() viewDetails = new EventEmitter<number>();

//   onViewDetails(): void {
//     if (this.product) {
//       this.viewDetails.emit(this.product.id);
//     }
//   }
// }
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
