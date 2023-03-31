import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonDetailsComponent } from './pages/person-details/person-details.component';
import { PersonEditComponent } from './pages/person-edit/person-edit.component';

export const routes: Routes = [
  {
    path: ':id',
    component: PersonDetailsComponent,
  },
  {
    path: ':id/edit',
    component: PersonEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
