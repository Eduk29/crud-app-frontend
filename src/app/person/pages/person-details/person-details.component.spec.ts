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
import { UserModule } from 'src/app/user/user.module';

import { PersonFormComponent } from '../../components/person-form/person-form.component';
import { BreadcrumbModule } from './../../../shared/components/breadcrumb/breadcrumb.module';
import { PersonDetailsComponent } from './person-details.component';

describe('PersonDetailsComponent', () => {
  let component: PersonDetailsComponent;
  let fixture: ComponentFixture<PersonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonDetailsComponent, PersonFormComponent],
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
    fixture = TestBed.createComponent(PersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
