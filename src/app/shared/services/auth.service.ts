import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/login`, data);
  }

  logout() {
  localStorage.removeItem('token');
}
}
