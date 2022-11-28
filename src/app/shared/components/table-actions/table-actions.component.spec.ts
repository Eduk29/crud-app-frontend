import { Person } from './../../../person/models/person.model';
import { DataTableActionService } from './../data-table/services/data-table.service';
import { TableActionsModule } from './table-actions.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionsComponent } from './table-actions.component';
import { TableActionsEnum } from '../../enums/table-actions.enum';

describe('TableActionsComponent', () => {
  let component: TableActionsComponent;
  let fixture: ComponentFixture<TableActionsComponent>;
  let service: DataTableActionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableActionsComponent],
      imports: [TableActionsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActionsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DataTableActionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD call data table service to dispatch an detail action WHEN detail click event happens', () => {
    spyOn<any>(service, 'dispatchTableAction');

    component.dispatchDetailClickEvent();

    expect(service.dispatchTableAction).toHaveBeenCalled();
  });

  it('SHOULD call data table service to dispatch an detail action with details data WHEN detail click event happens', () => {
    const fakePerson: Person = { id: 1, name: '', age: 999, birthday: '' };
    spyOn<any>(service, 'dispatchTableAction');

    component.person = fakePerson;
    component.dispatchDetailClickEvent();

    expect(service.dispatchTableAction).toHaveBeenCalledWith({
      dataId: 1,
      actionType: TableActionsEnum.DETAIL,
    });
  });

  it('SHOULD call data table service to dispatch an edition action WHEN edition click event happens', () => {
    spyOn<any>(service, 'dispatchTableAction');

    component.dispatchEditClickEvent();

    expect(service.dispatchTableAction).toHaveBeenCalled();
  });

  it('SHOULD call data table service to dispatch an edition action with details data WHEN edition click event happens', () => {
    const fakePerson: Person = { id: 1, name: '', age: 999, birthday: '' };
    spyOn<any>(service, 'dispatchTableAction');

    component.person = fakePerson;
    component.dispatchEditClickEvent();

    expect(service.dispatchTableAction).toHaveBeenCalledWith({
      dataId: 1,
      actionType: TableActionsEnum.EDIT,
    });
  });

  it('SHOULD call data table service to dispatch an edition action WHEN delete click event happens', () => {
    spyOn<any>(service, 'dispatchTableAction');

    component.dispatchDeleteClickEvent();

    expect(service.dispatchTableAction).toHaveBeenCalled();
  });

  it('SHOULD call data table service to dispatch an delete action with details data WHEN delete click event happens', () => {
    const fakePerson: Person = { id: 1, name: '', age: 999, birthday: '' };
    spyOn<any>(service, 'dispatchTableAction');

    component.person = fakePerson;
    component.dispatchDeleteClickEvent();

    expect(service.dispatchTableAction).toHaveBeenCalledWith({
      dataId: 1,
      actionType: TableActionsEnum.DELETE,
    });
  });
});
