import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataDisplayComponent } from './data-display.component';

@NgModule({
  declarations: [DataDisplayComponent],
  imports: [CommonModule],
  exports: [DataDisplayComponent],
})
export class DataDisplayModule {}
