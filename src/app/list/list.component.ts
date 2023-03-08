import { Component, OnInit } from '@angular/core';
import { IItem } from '../data/item';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private _todosService: TodosService) {}
  todos!: IItem[];

  private _generateId(): number {
    return this.todos.length + 1;
  }

  newTodo(): void {
    this.todos?.push({
      id: this._generateId(),
      name: 'Еще одна хорошая задача',
      description: 'Описание для еще одной хорошей задачи',
    });
  }
  ngOnInit(): void {
    this._todosService.getItems().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
