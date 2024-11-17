import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../states/app.state";
import {selectCount} from "../states/counter/counter.selector";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() name: string | null = ""
  count$: Observable<number>

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(selectCount)
  }
}
