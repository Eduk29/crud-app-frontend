import { BreadcrumbItem } from './breadcrumb-item.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'crud-app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: BreadcrumbItem[] = [];

  constructor() {}

  public get displayBreadcrumbs(): boolean {
    return !!this.breadcrumbs && this.breadcrumbs.length > 0;
  }
}
