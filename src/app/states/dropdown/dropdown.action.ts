import {createAction, props} from "@ngrx/store";


export const updateDropdown = createAction(
  '[Dropdown Component] updateDropdown',
  props<{ dropDownData: string }>()
)
