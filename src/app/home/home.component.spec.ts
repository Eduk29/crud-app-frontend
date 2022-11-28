import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PersonService } from '../person/services/person.service';
import { PERSON_LIST_MOCK } from './../tests/mocks/person-list.mock';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: PersonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HomeModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PersonService);
    fixture.detectChanges();
  });

  it('Home Component SHOULD call person list function WHEN component start', () => {
    spyOn<any>(component, 'getAllPersons').and.returnValue(of([]));
    component.ngOnInit();
    expect(component['getAllPersons']).toHaveBeenCalled();
  });

  it('Person List SHOULD call service WHEN load person list', () => {
    spyOn(service, 'getAll').and.returnValue(of([]));
    component['getAllPersons']();

    expect(service['getAll']).toHaveBeenCalled();
  });

  it('Person List size SHOULD be greater than 0 WHEN load person list', () => {
    spyOn(service, 'getAll').and.returnValue(of(PERSON_LIST_MOCK));

    component['getAllPersons']();

    expect(component.personList.length).toBeGreaterThan(0);
  });

  it('Person List size SHOULD be greater than 0 WHEN load person list', () => {
    spyOn(service, 'getAll').and.returnValue(of(PERSON_LIST_MOCK));

    component['getAllPersons']();

    expect(component.personList).toBe(PERSON_LIST_MOCK);
  });
});
