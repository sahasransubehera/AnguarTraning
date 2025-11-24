import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)
  }
];
