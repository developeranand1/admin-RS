import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class M3MProjectService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ✅ Add Project (with progress support)
  addProject(formData: FormData): Observable<HttpEvent<any>> {
    return this.http.post<any>(
      `${this.apiUrl}/m1m/project`,
      formData,
      {
        reportProgress: true,
        observe: 'events'
      }
    );
  }

  // ✅ Get All Projects
  getProjects() {
    return this.http.get<any[]>(`${this.apiUrl}/m1m/project`);
  }

  // ✅ Get Single Project
  getProjectById(id: string) {
    return this.http.get(`${this.apiUrl}/m1m/project/${id}`);
  }

  // ✅ Delete Project
  deleteProject(id: string) {
    return this.http.delete(`${this.apiUrl}/m1m/project/${id}`);
  }

  // ✅ Update Project
  updateProject(id: string, formData: FormData) {
    return this.http.put(`${this.apiUrl}/m1m/project/${id}`, formData);
  }

}