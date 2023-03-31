import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  declarations: [BreadcrumbComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, RouterModule],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
