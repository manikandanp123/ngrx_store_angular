import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {counterReducer} from "./states/counter/counter.reducer";
import {dropdownReducer} from "./states/dropdown/dropdown.reducer";
import {cartReducer} from "./states/cart/cart.reducer";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection(
    {eventCoalescing: true}),
    provideRouter(routes),
    provideStore(),
    provideState(
      {name: "counter", reducer: counterReducer}
    ),
    provideState(
      {name: "dropdown", reducer: dropdownReducer},
    ),
    provideState(
      {name: "cart", reducer: cartReducer},
    )
  ]
};
