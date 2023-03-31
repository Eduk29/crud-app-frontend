import { TableAction } from './../../../models/table-action.model';
import { TestBed } from '@angular/core/testing';

import { DataTableActionService } from './data-table.service';
import { TableActionsEnum } from 'src/app/shared/enums/table-actions.enum';

describe('DataTableActionService', () => {
  let service: DataTableActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTableActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dispatchTableAction SHOULD dispatch an table action WHEN action was dispatched to subscribed components', () => {
    const fakeTableAction: TableAction = {
      dataId: 1,
      actionType: TableActionsEnum.EDIT,
    };

    service.$tableActionSubscriber.subscribe(res => {
      expect(res).toBe(fakeTableAction);
    });

    service.dispatchTableAction(fakeTableAction);
  });

  it('clearActionSubscriber SHOULD clean subscriber WHEN called', () => {
    service.$tableActionSubscriber.subscribe(res => {
      expect(res).toBe(undefined);
    });

    service.clearActionSubscriber();
  });
});
