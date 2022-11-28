import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';

import { Person } from '../person/models/person.model';
import { DataTableActionService } from '../shared/components/data-table/services/data-table.service';
import { TableDefinitions } from '../shared/models/table-definitions.model';
import { PersonService } from './../person/services/person.service';
import { personTableDefinitions } from './configs/person-table-definitions.config';

@Component({
  selector: 'crud-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public personList: Person[] = [];
  public personTableDefinitions: TableDefinitions[] = personTableDefinitions;

  private $subscription?: Subscription;

  constructor(
    private personService: PersonService,
    private dataTableService: DataTableActionService
  ) {
    // TODO: Add table actions after routes impl.
    this.$subscription = this.dataTableService
      .getActionObservable()
      .subscribe();
  }

  ngOnInit(): void {
    this.getAllPersons();
  }

  ngOnDestroy(): void {
    if (!!this.$subscription) {
      this.$subscription.unsubscribe();
    }
  }

  private getAllPersons(): void {
    this.personService
      .getAll()
      .pipe(tap((response: Person[]) => (this.personList = response)))
      .subscribe();
  }
}
