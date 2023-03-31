import { Person } from './../../models/person.model';
import { takeUntil, tap, Subject } from 'rxjs';
import { PersonService } from './../../services/person.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { personEditionBreadcrumbs } from '../../configs/person-edition.configs';
import { BreadcrumbItem } from './../../../shared/components/breadcrumb/breadcrumb-item.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crud-app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent implements OnInit, OnDestroy {
  public editionBreadcrumbs: BreadcrumbItem[] = personEditionBreadcrumbs;
  public person?: Person;

  private destroySubject$: Subject<void> = new Subject();
  private personId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService
  ) {}

  public ngOnInit(): void {
    this.getPersonIdFromRouteParam();
  }

  public ngOnDestroy(): void {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  public back(): void {
    history.back();
  }

  public formSubmitEvent(person: Person) {
    if (!!person.user && person.user?.roles === null) {
      person.user.roles = [];
    }

    this.personService.updatePersonbyId(this.personId, person).subscribe(() => {
      console.log('Person: ', person);
    });
  }

  private getPersonById(): void {
    this.personService
      .getPersonById(this.personId)
      .pipe(
        takeUntil(this.destroySubject$),
        tap((person: Person) => {
          this.person = person;
        })
      )
      .subscribe();
  }

  private getPersonIdFromRouteParam(): void {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.destroySubject$),
        tap(params => {
          this.personId = params['id'];
          this.getPersonById();
        })
      )
      .subscribe();
  }
}
