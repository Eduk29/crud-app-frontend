import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BreadcrumbModule } from './../shared/components/breadcrumb/breadcrumb.module';
import { DataDisplayModule } from './../shared/components/data-display/data-display.module';
import { PageButtonsModule } from './../shared/components/page-buttons/page-buttons.module';
import { UserModule } from './../user/user.module';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';
import { PersonEditComponent } from './pages/person-edit/person-edit.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [
    PersonDetailsComponent,
    PersonEditComponent,
    PersonFormComponent,
  ],
  imports: [
    BreadcrumbModule,
    CommonModule,
    DataDisplayModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    PageButtonsModule,
    PersonRoutingModule,
    ReactiveFormsModule,
    UserModule,
  ],
})
export class PersonModule {}
