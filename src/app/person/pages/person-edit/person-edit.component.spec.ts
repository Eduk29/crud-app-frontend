import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';

import { PersonFormComponent } from '../../components/person-form/person-form.component';
import { UserModule } from './../../../user/user.module';
import { PersonEditComponent } from './person-edit.component';

describe('PersonEditComponent', () => {
  let component: PersonEditComponent;
  let fixture: ComponentFixture<PersonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonEditComponent, PersonFormComponent],
      imports: [
        BreadcrumbModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterTestingModule,
        UserModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
