import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { M3MProjectService } from '../../../../shared/services/m3m-project.service';

@Component({
  selector: 'app-m3m-project-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m3m-project-list.component.html',
  styleUrl: './m3m-project-list.component.scss'
})
export class M3mProjectListComponent implements OnInit {

  projects: any[] = [];
  loading = false;

  constructor(private projectService: M3MProjectService) {}

  ngOnInit(): void {
    this.fetchProjects();
  }

  fetchProjects() {
    this.loading = true;
    this.projectService.getProjects().subscribe({
      next: (res) => {
        this.projects = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        Swal.fire('Error', 'Failed to load projects', 'error');
      }
    });
  }

  deleteProject(id: string) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'Project will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete'
    }).then((result) => {

      if (result.isConfirmed) {

        this.projectService.deleteProject(id).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'Project removed successfully.', 'success');
            this.fetchProjects();
          },
          error: () => {
            Swal.fire('Error', 'Delete failed', 'error');
          }
        });

      }

    });
  }

}