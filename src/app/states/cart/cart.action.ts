import {createAction, props} from "@ngrx/store";
import {Person} from "./cart.reducer";

export const addToCart = createAction(
  '[Cart Component] AddingCart',
  props<{ person: Person }>()
)
export const removeFromCart = createAction(
  '[Cart Component] RemovingCart',
  props<{ username: string }>()
)
