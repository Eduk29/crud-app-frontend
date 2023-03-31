import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorPagesModule } from './error-pages/error-pages.module';
import { HomeModule } from './home/home.module';
import { PersonModule } from './person/person.module';
import { PersonService } from './person/services/person.service';
import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ErrorPagesModule,
    HomeModule,
    HttpClientModule,
    NavbarModule,
    PersonModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
