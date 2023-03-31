import { DataTypeEnum } from './../../enums/data-type.enum';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'crud-app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
})
export class DataDisplayComponent {
  @Input() label?: string;
  @Input() data?: any;
  @Input() dataType?: string;

  constructor() {}

  public get isDateData(): boolean {
    return !!this.dataType && this.dataType.toUpperCase() === DataTypeEnum.DATE;
  }

  public get isTextData(): boolean {
    return !!this.dataType && this.dataType.toUpperCase() === DataTypeEnum.TEXT;
  }
}
