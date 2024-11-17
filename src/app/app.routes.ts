import {Routes} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./home/home.component').then(a => a.HomeComponent)
    // component: HomeComponent
  },
  {
    path: "header",
    loadComponent: () => import('./header/header.component').then((a) => a.HeaderComponent)
    // component: HeaderComponent
  },
  {
    path: "cart",
    loadComponent: () => import('./cart/cart.component').then((a) => a.CartComponent)
  }
];
