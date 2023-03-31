import { PageServiceUnavailableComponent } from './page-service-unavailable/page-service-unavailable.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'server-unavailable', component: PageServiceUnavailableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorPagesRoutingModule {}
