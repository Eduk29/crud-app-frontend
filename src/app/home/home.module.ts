import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PersonService } from './../person/services/person.service';
import { DataTableModule } from './../shared/components/data-table/data-table.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DataTableModule, HomeRoutingModule, HttpClientModule],
  providers: [PersonService],
})
export class HomeModule {}
