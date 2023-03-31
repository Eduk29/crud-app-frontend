import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DataDisplayModule } from './../shared/components/data-display/data-display.module';
import { UserDetailsFormComponent } from './components/user-details-form/user-details-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';

@NgModule({
  declarations: [UserFormComponent, UserDetailsFormComponent],
  imports: [
    CommonModule,
    DataDisplayModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [UserFormComponent, UserDetailsFormComponent],
})
export class UserModule {}
