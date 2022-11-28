import { TableAction } from './../../models/table-action.model';
import { DataTableActionService } from '../data-table/services/data-table.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Person } from '../../../person/models/person.model';
import { ThisReceiver } from '@angular/compiler';
import { TableActionsEnum } from '../../enums/table-actions.enum';

@Component({
  selector: 'crud-app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent {
  @Input() person?: Person;

  constructor(private dataTableService: DataTableActionService) {}

  public dispatchDetailClickEvent(): void {
    const detailAction: TableAction = {
      dataId: this.person?.id,
      actionType: TableActionsEnum.DETAIL,
    };
    this.dataTableService.dispatchTableAction(detailAction);
  }

  public dispatchEditClickEvent(): void {
    const editionAction: TableAction = {
      dataId: this.person?.id,
      actionType: TableActionsEnum.EDIT,
    };
    this.dataTableService.dispatchTableAction(editionAction);
  }

  public dispatchDeleteClickEvent(): void {
    const deleteAction: TableAction = {
      dataId: this.person?.id,
      actionType: TableActionsEnum.DELETE,
    };
    this.dataTableService.dispatchTableAction(deleteAction);
  }
}
