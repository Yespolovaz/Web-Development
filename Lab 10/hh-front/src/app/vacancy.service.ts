import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from './vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private url = 'http://localhost:8000/api/companies/';

  constructor(private http: HttpClient) { }

  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.url}${companyId}/vacancies/`);
  }

  getVacancy(companyId: number, vacancyId: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.url}${companyId}/vacancies/${vacancyId}/`);
  }
}
