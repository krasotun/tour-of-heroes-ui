import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { IItem } from './data/item';
import { initialItems } from './data/items.db';

@Injectable({
  providedIn: 'root',
})
export class TodosService implements OnDestroy {
  private _todosSubject = new BehaviorSubject<IItem[]>(initialItems);
  private _destroySunject = new Subject();
  todos$: Observable<IItem[]> = this._todosSubject.pipe(
    takeUntil(this._destroySunject)
  );

  addTodo(item: IItem): void {
    this._todosSubject.next([item, ...initialItems]);
  }

  ngOnDestroy(): void {
    this._destroySunject.next(true);
    this._destroySunject.complete();
  }
}
