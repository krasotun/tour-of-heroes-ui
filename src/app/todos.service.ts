import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, switchMap, tap } from 'rxjs';
import { DataService } from './data/data.service';
import { IItem } from './data/item';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private _updateSubject = new ReplaySubject(1);
  constructor(private _dataService: DataService) {
    this._updateSubject.next(true);
  }
  getItems(): Observable<IItem[]> {
    return this._updateSubject.pipe(
      switchMap(() => {
        return this._dataService.getInitialItems();
      })
    );
  }
  addNewItem(name: string, description: string) {
    return this._dataService.addNewItem(name, description).pipe(
      tap(() => {
        this._updateSubject.next(true);
      })
    );
  }
}
