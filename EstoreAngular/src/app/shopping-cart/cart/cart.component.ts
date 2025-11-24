import { Component, OnInit } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { HighlightCardDirectiveDirective } from '../../Custom/highlight-card.directive.directive';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule,HighlightCardDirectiveDirective],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    if (this.cartService.getCartItems().length === 0) {
      // sample data
      this.cartService.addToCart({ productId: 1, name: 'Rose', price: 15, quantity: 2, image: '/assets/images/rose.jpg' });
      this.cartService.addToCart({ productId: 2, name: 'Lotus', price: 30, quantity: 4, image: '/assets/images/lotus.jpg' });
    }
    this.load();
  }

  load(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.removeFromCart(productId);
      return;
    }
    this.cartService.updateQuantity(productId, quantity);
    this.load();
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.load();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.load();
  }

  getTotalItems(): number {
    return this.cartService.getTotalItems();
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  goToAddItem(): void {
    this.router.navigate(['/add']); // ✅ go to AddToCart page
  }
}
