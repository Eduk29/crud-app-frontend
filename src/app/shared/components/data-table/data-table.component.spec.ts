import { DISPLAYED_COLUMN_MOCK } from './../../../tests/mocks/displayed-columns.mock';
import { TABLE_DEFINITIONS_MOCK } from './../../../tests/mocks/table-definitions.mock';
import { PERSON_LIST_MOCK } from './../../../tests/mocks/person-list.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD not display table WHEN datasource is empty', () => {
    component.dataSource = [];

    expect(component.displayTable).toBe(false);
  });

  it('SHOULD not display table WHEN columns dedinitions is empty', () => {
    component.dataSource = PERSON_LIST_MOCK;
    component.columnsDefinitions = [];

    expect(component.displayTable).toBe(false);
  });

  it('SHOULD return false WHEN column is not action', () => {
    const column: boolean = component.isActionColumn('testColumn');

    expect(column).toBe(false);
  });

  it('Function isActionColumn SHOULD return true WHEN column is actions', () => {
    const column: boolean = component.isActionColumn('actions');

    expect(column).toBe(true);
  });

  it('Function isActionColumn SHOULD return true WHEN column is actions', () => {
    const column: boolean = component.isActionColumn('actions');

    expect(column).toBe(true);
  });

  it('isDateData SHOULD validate data as true WHEN data type passed as parameter is a date', () => {
    const fakeDate = '2022-12-25T00:00:00Z';
    const dateValidation = component.isDateData(fakeDate);

    expect(dateValidation).toBe(true);
  });

  it('isDateData SHOULD validate data as false WHEN data type passed is not a date', () => {
    const fakeDate = 'wrongDate';
    const dateValidation = component.isDateData(fakeDate);

    expect(dateValidation).toBe(false);
  });

  it('displayed columns array length SHOULD be 0 WHEN application starts', () => {
    expect(component.displayedColumns.length).toBe(0);
  });

  it('displayed columns array length SHOULD be greater than 0 WHEN columns definitions is passed to component', () => {
    component.columnsDefinitions = TABLE_DEFINITIONS_MOCK;
    component['constructDisplayedColumnsArray']();

    expect(component.displayedColumns.length).toBeGreaterThan(0);
  });

  it('displayed columns array length SHOULD contains a name definitions of columns WHEN columns definitions is passed to component', () => {
    component.columnsDefinitions = TABLE_DEFINITIONS_MOCK;
    component['constructDisplayedColumnsArray']();

    expect(component.displayedColumns).toEqual(DISPLAYED_COLUMN_MOCK);
  });

  it('SHOULD call function to construct dislayedColumns array WHEN new column definition was passed as input', () => {
    component.columnsDefinitions = TABLE_DEFINITIONS_MOCK;
    fixture.detectChanges();

    const fakeChanges: SimpleChanges = {
      columnsDefinitions: new SimpleChange(
        [],
        component.columnsDefinitions,
        true
      ),
    };

    component.ngOnChanges(fakeChanges);

    expect(component.displayedColumns).toEqual(DISPLAYED_COLUMN_MOCK);
  });
});
