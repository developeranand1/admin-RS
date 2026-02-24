import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  m3mOpen = true;
m2mOpen = false;

toggleM3M() {
  this.m3mOpen = !this.m3mOpen;
}

toggleM2M() {
  this.m2mOpen = !this.m2mOpen;
}

  logout() {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout',
      cancelButtonText: 'Cancel'
    }).then((result) => {

      if (result.isConfirmed) {

        this.authService.logout();   

        Swal.fire({
          icon: 'success',
          title: 'Logged Out Successfully',
          timer: 1200,
          showConfirmButton: false
        });

        this.router.navigate(['/login']);
      }

    });
  }
}