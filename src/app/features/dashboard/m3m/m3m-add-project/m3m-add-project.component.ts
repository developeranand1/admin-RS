import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import Swal from 'sweetalert2';

import { CommonModule } from '@angular/common';
import { M3MProjectService } from '../../../../shared/services/m3m-project.service';

@Component({
  selector: 'app-m3m-add-project',
  standalone: true,
  imports: [FormsModule, EditorModule, CommonModule],
  templateUrl: './m3m-add-project.component.html',
  styleUrl: './m3m-add-project.component.scss'
})
export class M3mAddProjectComponent {

  project: any = {
    name: '',
    cost: '',
    area: '',
    amenities: [],
    projectType: '',
    shortDescription: '',
    description: '',
    metaTitle: '',
    metaDescription: '',
    metaKeywords: ''
  };

  amenityInput = '';
  selectedImage!: File;
  imagePreview: any;

  loading = false;
  uploadProgress = 0;

  constructor(private projectService: M3MProjectService) {}

  addAmenity() {
    if (this.amenityInput.trim()) {
      this.project.amenities.push(this.amenityInput.trim());
      this.amenityInput = '';
    }
  }

  removeAmenity(index: number) {
    this.project.amenities.splice(index, 1);
  }

  onFileChange(event: any) {
    this.selectedImage = event.target.files[0];
    if (this.selectedImage) {
      this.imagePreview = URL.createObjectURL(this.selectedImage);
    }
  }

  submitProject() {

    if (!this.project.name || !this.project.description) {
      Swal.fire('Warning', 'Project name & description required', 'warning');
      return;
    }

    const formData = new FormData();

    Object.keys(this.project).forEach(key => {
      if (key === 'amenities') {
        this.project.amenities.forEach((a: string) =>
          formData.append('amenities[]', a)
        );
      } else {
        formData.append(key, this.project[key] || '');
      }
    });

    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.loading = true;
    this.uploadProgress = 30;

    this.projectService.addProject(formData).subscribe({
      next: () => {
        this.uploadProgress = 100;

        Swal.fire({
          icon: 'success',
          title: 'Project Added Successfully!',
          timer: 1500,
          showConfirmButton: false
        });

        this.resetForm();
      },
      error: () => {
        Swal.fire('Error', 'Failed to add project', 'error');
        this.loading = false;
        this.uploadProgress = 0;
      }
    });
  }

  resetForm() {
    this.project = {
      name: '',
      cost: '',
      area: '',
      amenities: [],
      projectType: '',
      shortDescription: '',
      description: '',
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