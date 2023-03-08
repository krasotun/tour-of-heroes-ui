import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IItem } from './item';
const initialItems: IItem[] = [
  {
    id: 1,
    name: 'Хорошая задача',
    description: 'Очень хорошая задача',
  },
  {
    id: 2,
    name: 'Тоже хорошая задача',
    description: 'Тоже очень хорошая задача',
  },
  {
    id: 3,
    name: 'Самая хорошая задача',
    description: 'Самая хорошая задача',
  },
];
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _generateId(): number {
    return initialItems.length + 1;
  }

  getInitialItems(): Observable<IItem[]> {
    return of(initialItems);
  }

  addNewItem(name: string, description: string): Observable<IItem> {
    const newItem: IItem = {
      id: this._generateId(),
      name,
      description,
    };
    initialItems.push(newItem);
    return of(newItem);
  }
}
