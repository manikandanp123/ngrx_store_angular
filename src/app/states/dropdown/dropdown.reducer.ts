import {createReducer, on} from "@ngrx/store";
import {updateDropdown} from "./dropdown.action";

export interface dropDownState {
  dropdown: string
}

export const initialDropDownValue: dropDownState = {
  dropdown: ""
}

export const dropdownReducer = createReducer(
  initialDropDownValue,
  on(
    updateDropdown,
    (state, {dropDownData}) => ({...state, dropdown: dropDownData})
  )
)
