import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    return true;
  } else {

    Swal.fire({
      icon: 'warning',
      title: 'Unauthorized',
      text: 'Please login first!'
    });

    router.navigate(['/login']);
    return false;
  }
};