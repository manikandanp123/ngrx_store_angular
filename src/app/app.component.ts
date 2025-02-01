import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {CounterComponent} from "./counter/counter.component";
import { ResizeComponentComponent } from './resize-component/resize-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CounterComponent,ResizeComponentComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges {
  title = 'ngrx_learning';


  constructor(){
    console.log("constructor.....")
  }

  ngOnInit(): void {
    console.log("ngOnInit.....")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes...")
  }
}
