import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '..interface/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = 'http://localhost:8000/api/companies/';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.url}${id}/`);
  }
}
