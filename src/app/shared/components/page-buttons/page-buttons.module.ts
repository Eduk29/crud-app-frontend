import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { PageButtonsComponent } from './page-buttons.component';

@NgModule({
  declarations: [PageButtonsComponent],
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  exports: [PageButtonsComponent],
})
export class PageButtonsModule {}
