import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Company } from '../models/Company';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyPath = environment.apiUrl + 'companies';
  constructor(private http: HttpClient, private authService: AuthService) { }

  create(data: any): Observable<Company> {
    return this.http.post<Company>(this.companyPath, data);
  }

  getCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>(this.companyPath);
  }
}
