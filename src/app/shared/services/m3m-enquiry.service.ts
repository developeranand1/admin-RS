import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class M3MEnquiryService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get All Enquiries
  getEnquiries() {
    return this.http.get<any[]>(`${this.apiUrl}/m1m/enquiry`);
  }

  // Delete Enquiry
  deleteEnquiry(id: string) {
    return this.http.delete(`${this.apiUrl}/m1m/enquiry/${id}`);
  }
}