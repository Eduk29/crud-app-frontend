import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private urlAPI: string;

  constructor(private httpRequest: HttpClient) {
    this.urlAPI = `${environment.urlAPI}`;
  }

  public getAll(): Observable<Person[]> {
    const urlRequest = `${this.urlAPI}/persons`;
    return this.httpRequest.get<Person[]>(urlRequest);
  }
}
