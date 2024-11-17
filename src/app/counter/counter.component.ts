import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCount} from "../states/counter/counter.selector";
import {AppState} from "../states/app.state";
import {decrement, increment, reset} from "../states/counter/counter.action";
import {AsyncPipe} from "@angular/common";
import {selectDropdown} from "../states/dropdown/dropdown.selector";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count$: Observable<number>
  dropdown$: Observable<string>

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount)
    this.dropdown$ = this.store.select(selectDropdown)
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
