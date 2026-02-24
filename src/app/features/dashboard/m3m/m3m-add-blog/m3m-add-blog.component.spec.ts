import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3mAddBlogComponent } from './m3m-add-blog.component';

describe('M3mAddBlogComponent', () => {
  let component: M3mAddBlogComponent;
  let fixture: ComponentFixture<M3mAddBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M3mAddBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3mAddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
