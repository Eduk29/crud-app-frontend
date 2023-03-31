import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'person',
    loadChildren: () =>
      import('./person/person.module').then(m => m.PersonModule),
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
