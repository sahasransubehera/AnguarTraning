import { Injectable } from '@angular/core';
import { Item as CartItem } from './models/Item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private storageKey = 'shoppingCart';

  constructor() {
    // Initialize sessionStorage with empty array if empty
    if (!sessionStorage.getItem(this.storageKey)) {
      sessionStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }

  // Add Product to Cart
  addToCart(item: CartItem): void {
    const items = this.getCartItems();
    items.push(item);
    this.saveCart(items);
  }

  // Get All Cart Items
  getCartItems(): CartItem[] {
    const data = sessionStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Update Quantity
  updateQuantity(productId: number, quantity: number): void {
    const data = this.getCartItems();
    const index = data.findIndex(x => x.productId === productId);
    if (index !== -1) {
      data[index].quantity = quantity;
      this.saveCart(data);
    }
  }

  // Remove Product from Cart
  removeFromCart(productId: number): void {
    // keep items whose id is NOT the passed productId
    const data = this.getCartItems().filter(x => x.productId !== productId);
    this.saveCart(data);
  }

  // Clear Entire Cart
  clearCart(): void {
    sessionStorage.removeItem(this.storageKey);
    sessionStorage.setItem(this.storageKey, JSON.stringify([]));
  }

  // Calculate Total Items
  getTotalItems(): number {
    const data = this.getCartItems();
    return data.length;
  }

  // Calculate Total Amount
  getTotalPrice(): number {
    const data = this.getCartItems();
    return data.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Private helper
  private saveCart(cart: CartItem[]): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify(cart));
  }
}