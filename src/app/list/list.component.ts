import { Component, OnInit } from '@angular/core';
import { IItem } from '../data/item';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  todos$ = this._todosService.getItems();

  constructor(private _todosService: TodosService) {}
}
