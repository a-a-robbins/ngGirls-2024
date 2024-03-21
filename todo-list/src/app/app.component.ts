import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InputButtonUnitComponent} from "./input-button-unit/input-button-unit.component";
import {NgForOf} from "@angular/common";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import {TodoItem} from "./interfaces/todo-item";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputButtonUnitComponent, NgForOf, TodoItemComponent],
  template: `
    <h1>
      Oss World! {{ title }}
    </h1>

    <app-input-button-unit (submit) = "addItem($event)"></app-input-button-unit>

    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "Let's do some stuff ;-)";
  todoList : TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install AngularCLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {
    this.todoList.push({title});
  }
}
