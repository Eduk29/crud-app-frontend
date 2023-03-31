import { DataTableActionService } from './../shared/components/data-table/services/data-table.service';
import { TableAction } from 'src/app/shared/models/table-action.model';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PersonService } from '../person/services/person.service';
import { PERSON_LIST_MOCK } from './../tests/mocks/person-list.mock';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';
import { TableActionsEnum } from '../shared/enums/table-actions.enum';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: PersonService;
  let tableService: DataTableActionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HomeModule, RouterTestingModule],
      providers: [DataTableActionService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PersonService);
    tableService = TestBed.inject(DataTableActionService);
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

  it('isDetailAction SHOULD return false WHEN table action is not a detail action', () => {
    const actionValidation = component['isDetailAction'](TableActionsEnum.EDIT);

    expect(actionValidation).toBe(false);
  });

  it('isDetailAction SHOULD return true WHEN table action is a detail action', () => {
    const actionValidation = component['isDetailAction'](
      TableActionsEnum.DETAIL
    );

    expect(actionValidation).toBe(true);
  });

  it('isEditionAction SHOULD return false WHEN table action is not a edition action', () => {
    const actionValidation = component['isEditionAction'](
      TableActionsEnum.DETAIL
    );

    expect(actionValidation).toBe(false);
  });

  it('isEditionAction SHOULD return true WHEN table action is a edtion action', () => {
    const actionValidation = component['isEditionAction'](
      TableActionsEnum.EDIT
    );

    expect(actionValidation).toBe(true);
  });

  it('executeAction SHOULD validate if action type is an edition WHEN table edition action is dispatched', () => {
    const fakeAction: TableAction = {
      dataId: 999,
      actionType: TableActionsEnum.EDIT,
    };
    spyOn<any>(component['router'], 'navigate');

    component['executeAction'](fakeAction);

    expect(component['router'].navigate).toHaveBeenCalled();
  });

  it('executeAction SHOULD validate if action type is an edition WHEN table detail action is dispatched', () => {
    const fakeAction: TableAction = {
      dataId: 999,
      actionType: TableActionsEnum.DETAIL,
    };
    spyOn<any>(component['router'], 'navigate');

    component['executeAction'](fakeAction);

    expect(component['router'].navigate).toHaveBeenCalled();
  });

  it('SHOULD excuteAction function WHEN table action is dispatched', () => {
    const fakeAction: TableAction = {
      dataId: 999,
      actionType: TableActionsEnum.DETAIL,
    };
    spyOn<any>(component, 'executeAction');

    tableService.dispatchTableAction(fakeAction);

    expect(component['executeAction']).toHaveBeenCalled();
  });
});
