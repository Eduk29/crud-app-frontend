import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';
import { FormTypeEnum } from 'src/app/shared/enums/form-type.enum';

import { personDetailBreadcrumbs } from '../../configs/person-detail.configs';
import { BreadcrumbItem } from './../../../shared/components/breadcrumb/breadcrumb-item.model';
import { Person } from './../../models/person.model';
import { PersonService } from './../../services/person.service';

@Component({
  selector: 'crud-app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnDestroy {
  public detailBreadcrumbs: BreadcrumbItem[] = personDetailBreadcrumbs;
  public detailFormType: string = FormTypeEnum.DETAIL;
  public person?: Person;

  private destroySubject$: Subject<void> = new Subject();

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute
  ) {
    this.getPersonIdFromRouteParam();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }

  public back(): void {
    history.back();
  }

  private getPersonIdFromRouteParam(): void {
    this.activatedRoute.params
      .pipe(
        takeUntil(this.destroySubject$),
        tap(params => {
          this.getPersonById(params['id']);
        })
      )
      .subscribe();
  }

  private getPersonById(personId: number): void {
    this.personService
      .getPersonById(personId)
      .pipe(
        takeUntil(this.destroySubject$),
        tap((personResponse: Person) => (this.person = personResponse))
      )
      .subscribe(() => console.log('Person: ', this.person));
  }
}
