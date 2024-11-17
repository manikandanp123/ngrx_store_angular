import {createSelector} from "@ngrx/store";
import {AppState} from "../app.state";

export const selectDropdownState = (state: AppState) => state.dropdown

export const selectDropdown = createSelector(
  selectDropdownState,
  (state) => state.dropdown
)
