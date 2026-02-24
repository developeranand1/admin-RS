import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import Swal from 'sweetalert2';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login() {
    if (!this.email || !this.password) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please enter username and password!',
      });
      return;
    }

    this.authService
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome back!',
          });

          console.log(res);

          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: err.error?.message || 'Invalid credentials',
          });
        },
      });
  }
}
