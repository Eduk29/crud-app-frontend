import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbModule } from 'src/app/shared/components/breadcrumb/breadcrumb.module';
import { UserModule } from 'src/app/user/user.module';

import { PersonFormComponent } from './person-form.component';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonFormComponent],
      imports: [
        BreadcrumbModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        ReactiveFormsModule,
        UserModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
