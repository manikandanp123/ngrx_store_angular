import {counterState} from "./counter/counter.reducer";
import {dropDownState} from "./dropdown/dropdown.reducer";
import {cartState} from "./cart/cart.reducer";

export interface AppState {
  counter: counterState,
  dropdown: dropDownState,
  cart: cartState
}
