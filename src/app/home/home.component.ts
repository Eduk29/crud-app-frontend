import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Subject, Subscription, takeUntil, tap } from 'rxjs';
import { TableAction } from 'src/app/shared/models/table-action.model';

import { Person } from '../person/models/person.model';
import { DataTableActionService } from '../shared/components/data-table/services/data-table.service';
import { TableActionsEnum } from '../shared/enums/table-actions.enum';
import { TableDefinitions } from '../shared/models/table-definitions.model';
import { PersonService } from './../person/services/person.service';
import { personTableDefinitions } from './configs/person-table-definitions.config';

@Component({
  selector: 'crud-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public displayAPIErrorFlux: boolean = false;
  public personList: Person[] = [];
  public personTableDefinitions: TableDefinitions[] = personTableDefinitions;

  private $subscription?: Subscription;
  private destroySubject$: Subject<void> = new Subject();

  constructor(
    private dataTableService: DataTableActionService,
    private personService: PersonService,
    private router: Router
  ) {
    // TODO: Add table actions after routes impl.
    this.dataTableService
      .getActionObservable()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((action: TableAction) => {
        this.executeAction(action);
      });
  }

  public ngOnInit(): void {
    this.getAllPersons();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  public get displayTable(): boolean {
    return !!this.personList && this.personList.length > 0;
  }

  private executeAction(action: TableAction): void {
    if (!!this.isDetailAction(action.actionType)) {
      this.router.navigate(['..', 'person', action.dataId]);
    }
    if (!!this.isEditionAction(action.actionType)) {
      this.router.navigate(['..', 'person', action.dataId, 'edit']);
    }
  }

  private getAllPersons(): void {
    this.personService
      .getAll()
      .pipe(
        takeUntil(this.destroySubject$),
        tap((response: Person[]) => (this.personList = response))
      )
      .subscribe({
        error: (err: HttpErrorResponse) => {
          if (err.status === 0) {
            this.displayAPIErrorFlux = true;
            this.router.navigate(['errors', 'server-unavailable']);
          }
        },
      });
  }

  private isDetailAction(actionType: TableActionsEnum): boolean {
    return actionType === TableActionsEnum.DETAIL;
  }

  private isEditionAction(actionType: TableActionsEnum): boolean {
    return actionType === TableActionsEnum.EDIT;
  }
}
