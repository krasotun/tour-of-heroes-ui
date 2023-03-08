import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IItem } from './data/item';
import { initialItems } from './data/items.db';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  getItems(): Observable<IItem[]> {
    return of(initialItems);
  }
}
