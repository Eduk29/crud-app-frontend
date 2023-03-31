import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageServiceUnavailableComponent } from './page-service-unavailable/page-service-unavailable.component';

@NgModule({
  declarations: [PageNotFoundComponent, PageServiceUnavailableComponent],
  imports: [CommonModule, ErrorPagesRoutingModule],
})
export class ErrorPagesModule {}
