import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  addBlog(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/m1m/blog`, formData);
  }
  getBlogs() {
  return this.http.get<any[]>(`${this.apiUrl}/m1m/blog`);
}

deleteBlog(id: string) {
  return this.http.delete(`${this.apiUrl}/m1m/blog/${id}`);
}
}