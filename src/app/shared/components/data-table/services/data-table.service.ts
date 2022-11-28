import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TableAction } from 'src/app/shared/models/table-action.model';

@Injectable({
  providedIn: 'root',
})
export class DataTableActionService {
  public $tableActionSubscriber = new Subject<TableAction | undefined>();

  constructor() {}

  public dispatchTableAction(tableAction: TableAction): void {
    this.$tableActionSubscriber.next(tableAction);
  }

  public clearActionSubscriber(): void {
    this.$tableActionSubscriber.next(undefined);
  }

  public getActionObservable(): Observable<any> {
    return this.$tableActionSubscriber.asObservable();
  }
}
