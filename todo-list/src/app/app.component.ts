import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputButtonUnitComponent} from "./input-button-unit/input-button-unit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputButtonUnitComponent],
  template: ' <h1> Oss World! {{ title }}</h1> <app-input-button-unit></app-input-button-unit>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Let's do some stuff ;-)";
}
