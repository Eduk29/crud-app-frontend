import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { DataTableActionService } from '../data-table/services/data-table.service';
import { TableActionsComponent } from './table-actions.component';

@NgModule({
  declarations: [TableActionsComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [TableActionsComponent],
  providers: [DataTableActionService],
})
export class TableActionsModule {}
