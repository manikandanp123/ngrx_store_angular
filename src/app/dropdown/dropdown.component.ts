import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../states/app.state";
import {updateDropdown} from "../states/dropdown/dropdown.action";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  constructor(private store: Store<AppState>) {
  }

  btnFun(data: string) {
    let body = {dropDownData: data}
    this.store.dispatch(updateDropdown(body))
  }

}
