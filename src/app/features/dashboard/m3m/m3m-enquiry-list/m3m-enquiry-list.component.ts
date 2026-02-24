import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { M3MEnquiryService } from '../../../../shared/services/m3m-enquiry.service';

@Component({
  selector: 'app-m3m-enquiry-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m3m-enquiry-list.component.html',
  styleUrl: './m3m-enquiry-list.component.scss'
})
export class M3mEnquiryListComponent implements OnInit {

  enquiries: any[] = [];
  loading = false;

  constructor(private enquiryService: M3MEnquiryService) {}

  ngOnInit(): void {
    this.fetchEnquiries();
  }

  fetchEnquiries() {
    this.loading = true;
    this.enquiryService.getEnquiries().subscribe({
      next: (res) => {
        this.enquiries = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        Swal.fire('Error', 'Failed to load enquiries', 'error');
      }
    });
  }

  deleteEnquiry(id: string) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'This enquiry will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete'
    }).then((result) => {

      if (result.isConfirmed) {

        this.enquiryService.deleteEnquiry(id).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'Enquiry removed successfully.', 'success');
            this.fetchEnquiries();
          },
          error: () => {
            Swal.fire('Error', 'Delete failed', 'error');
          }
        });

      }

    });
  }

}