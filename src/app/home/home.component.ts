import {Component} from '@angular/core';
import {CounterComponent} from "../counter/counter.component";
import {HeaderComponent} from "../header/header.component";
import {RouterLink} from "@angular/router";
import {DropdownComponent} from "../dropdown/dropdown.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CounterComponent,
    HeaderComponent,
    RouterLink,
    DropdownComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
