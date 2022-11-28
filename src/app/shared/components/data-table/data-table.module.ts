import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { DataTableActionService } from './services/data-table.service';
import { TableActionsModule } from '../table-actions/table-actions.module';
import { DataTableComponent } from './data-table.component';

@NgModule({
  declarations: [DataTableComponent],
  imports: [CommonModule, MatTableModule, TableActionsModule],
  exports: [DataTableComponent],
  providers: [DataTableActionService],
})
export class DataTableModule {}
