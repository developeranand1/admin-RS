import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3mBlogListComponent } from './m3m-blog-list.component';

describe('M3mBlogListComponent', () => {
  let component: M3mBlogListComponent;
  let fixture: ComponentFixture<M3mBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M3mBlogListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3mBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
