import {createReducer, on} from "@ngrx/store";
import {addToCart, removeFromCart} from "./cart.action";

export interface cartState {
  cart: Array<Person>
}

export interface Person {
  username: string,
  email: string,
  age: number,
  password: string
}

export const initialCart: cartState = {
  cart: [
    // {
    //   username: "Pmani",
    //   email: "",
    //   age: 0,
    //   password: ""
    // }
  ]
}

export const cartReducer = createReducer(
  initialCart,
  on(addToCart, (state: any, {person}) => ({...state, cart: [...state.cart, person]})),
  on(removeFromCart, (state: any, {username}) =>
    ({
      ...state,
      cart: state.cart.filter((person: any) => person.username != username)
    }))
)
