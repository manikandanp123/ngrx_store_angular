import {createSelector} from "@ngrx/store";
import {cartState} from "./cart.reducer";
import {AppState} from "../app.state";


export const selectCartState = (state: AppState) => state.cart

export const selectCart = createSelector(
  selectCartState,
  (state) => state.cart
)
