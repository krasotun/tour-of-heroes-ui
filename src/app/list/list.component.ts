import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private _todosService: TodosService) {}
  todos$ = this._todosService.todos$;
  newTodo(): void {
    console.log('newTodo pressedd');
    this._todosService.addTodo({
      id: 25,
      name: 'Еще одно дело',
      description: 'Всем делам дело',
    });
  }
}
