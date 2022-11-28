import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { TableDefinitions } from './../../models/table-definitions.model';

@Component({
  selector: 'crud-app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnChanges {
  @Input() columnsDefinitions: TableDefinitions[] = [];
  @Input() dataSource: any[] = [];

  public displayedColumns: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      !!this.columnsDefinitions &&
      this.columnsDefinitions.length > 0 &&
      this.displayedColumns.length === 0
    ) {
      this.constructDisplayedColumnsArray();
    }
  }

  public get displayTable(): boolean {
    return (
      !!this.dataSource &&
      this.dataSource.length > 0 &&
      !!this.columnsDefinitions &&
      this.columnsDefinitions.length > 0
    );
  }

  public isActionColumn(column: string): boolean {
    return column === 'actions';
  }

  public isDateData(data: string): boolean {
    const regexDate = new RegExp(
      /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z/gm
    );
    return regexDate.test(data);
  }

  private constructDisplayedColumnsArray(): void {
    for (let i = 0; i < this.columnsDefinitions.length; i++) {
      this.displayedColumns.push(this.columnsDefinitions[i].columnDefinition);
    }
  }
}
