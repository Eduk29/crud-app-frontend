import { TableActionsEnum } from '../enums/table-actions.enum';

export interface TableAction {
  dataId?: number;
  actionType: TableActionsEnum;
}
