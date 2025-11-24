import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'add', component: AddToCartComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartComponent,
    ItemComponent,
    AddToCartComponent,
    RouterModule.forChild(routes) // ✅ feature-level routes
  ],
  exports: [CartComponent, AddToCartComponent, ItemComponent, RouterModule]
})
export class ShoppingCartModule {}
