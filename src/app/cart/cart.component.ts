import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, NgForOf} from "@angular/common";
import {Store} from "@ngrx/store";
import {AppState} from "../states/app.state";
import {Observable} from "rxjs";
import {Person} from "../states/cart/cart.reducer";
import {selectCart} from "../states/cart/cart.selector";
import {addToCart, removeFromCart} from "../states/cart/cart.action";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  allPersonData$: Observable<Array<Person>>
  personForm: FormGroup
  templateData = [
    {name: "username", type: "text"},
    {name: "email", type: "email"},
    {name: "age", type: "number"},
    {name: "password", type: "password"},
  ]
  protected readonly JSON = JSON;


  constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {
    this.allPersonData$ = this.store.select(selectCart)
    console.log("this.allPersonData$--------", this.allPersonData$)
    this.personForm = this.formBuilder.group(
      {
        username: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        age: ["", Validators.required],
        password: ["", Validators.required],
      }
    )
  }

  formSubmit() {
    console.log("this.personForm.value----------", this.personForm.value);
    let d1 = this.personForm.value;
    let body = {
      person: d1
    }
    this.store.dispatch(addToCart(body))
    this.personForm.reset()
    console.log("this.personForm.value----------", this.personForm.value);

  }

  deleteRecord(data: string) {
    let body = {
      username: data
    }
    this.store.dispatch(removeFromCart(body))
  }

}
