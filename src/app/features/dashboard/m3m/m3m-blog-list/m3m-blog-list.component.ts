import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { BlogService } from '../../../../shared/services/m3mblog.service';

@Component({
  selector: 'app-m3m-blog-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './m3m-blog-list.component.html',
  styleUrl: './m3m-blog-list.component.scss'
})
export class M3mBlogListComponent implements OnInit {

  blogs: any[] = [];
  loading = false;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs() {
    this.loading = true;
    this.blogService.getBlogs().subscribe({
      next: (res) => {
        this.blogs = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        Swal.fire('Error', 'Failed to fetch blogs', 'error');
      }
    });
  }

  deleteBlog(id: string) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'This blog will be deleted permanently!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete'
    }).then((result) => {

      if (result.isConfirmed) {

        this.blogService.deleteBlog(id).subscribe({
          next: () => {
            Swal.fire('Deleted!', 'Blog removed successfully.', 'success');
            this.fetchBlogs(); // refresh list
          },
          error: () => {
            Swal.fire('Error', 'Failed to delete blog', 'error');
          }
        });

      }

    });
  }
}