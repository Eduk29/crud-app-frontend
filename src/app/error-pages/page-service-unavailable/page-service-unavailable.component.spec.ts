import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServiceUnavailableComponent } from './page-service-unavailable.component';

describe('PageServiceUnavailableComponent', () => {
  let component: PageServiceUnavailableComponent;
  let fixture: ComponentFixture<PageServiceUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageServiceUnavailableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageServiceUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
