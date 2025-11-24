import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { HighlightCardDirectiveDirective } from '../../Custom/highlight-card.directive.directive';

@Component({
  selector: 'app-add-to-cart',
  standalone: true,
  imports: [FormsModule,HighlightCardDirectiveDirective],
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  newItem = {
    productId: 0,
    name: '',
    price: 0,
    quantity: 1,
    image: ''
  };

  constructor(private cartService: CartService, private router: Router) {}

  addToCart() {
    if (!this.newItem.productId || !this.newItem.name) return;
    this.cartService.addToCart({ ...this.newItem });
    this.newItem = { productId: 0, name: '', price: 0, quantity: 1, image: '' };
    this.router.navigate(['/cart']); // ✅ redirect back to Cart page
  }
}
