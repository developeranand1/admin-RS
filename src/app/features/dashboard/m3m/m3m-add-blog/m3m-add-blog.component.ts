import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import Swal from 'sweetalert2';
import { BlogService } from '../../../../shared/services/m3mblog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-m3m-add-blog',
  standalone: true,
  imports: [FormsModule, EditorModule,CommonModule],
  templateUrl: './m3m-add-blog.component.html',
  styleUrl: './m3m-add-blog.component.scss'
})
export class M3mAddBlogComponent {

  blog: any = {
    title: '',
    shortDescription: '',
    description: '',
    category: '',
    type: '',
    authorName: '',
    authorAbout: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: ''
  };

  selectedImage!: File;
  imagePreview: any;

  loading = false;
  uploadProgress = 0;

  constructor(private blogService: BlogService) {}

  onFileChange(event: any) {
    this.selectedImage = event.target.files[0];

    if (this.selectedImage) {
      this.imagePreview = URL.createObjectURL(this.selectedImage);
    }
  }

  submitBlog() {

    if (!this.blog.title || !this.blog.description) {
      Swal.fire('Warning', 'Title & Description required', 'warning');
      return;
    }

    const formData = new FormData();

    Object.keys(this.blog).forEach(key => {
      formData.append(key, this.blog[key] || '');
    });

    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.loading = true;
    this.uploadProgress = 30;

    this.blogService.addBlog(formData).subscribe({
      next: () => {

        this.uploadProgress = 100;

        Swal.fire({
          icon: 'success',
          title: 'Blog Added Successfully!',
          timer: 1500,
          showConfirmButton: false
        });

        this.resetForm();
      },
      error: (err) => {
        Swal.fire('Error!', err.error?.message || 'Failed to add blog', 'error');
        this.loading = false;
        this.uploadProgress = 0;
      }
    });
  }

  resetForm() {
    this.blog = {
      title: '',
      shortDescription: '',
      description: '',
      category: '',
      type: '',
      authorName: '',
      authorAbout: '',
      metaTitle: '',
      metaDescription: '',
      metaKeywords: ''
    };

    this.selectedImage = undefined as any;
    this.imagePreview = null;
    this.loading = false;
    this.uploadProgress = 0;
  }
}