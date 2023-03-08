import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss'],
})
export class AddItemFormComponent {
  readonly addItemForm = this._fb.nonNullable.group({
    name: '',
    description: '',
  });

  constructor(private _todosService: TodosService, private _fb: FormBuilder) {}

  newTodo(): void {
    const formValue = this.addItemForm.value;
    this._todosService.addNewItem(
      formValue.name as string,
      formValue.description as string
    );
  }
}
