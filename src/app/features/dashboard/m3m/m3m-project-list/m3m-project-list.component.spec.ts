import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3mProjectListComponent } from './m3m-project-list.component';

describe('M3mProjectListComponent', () => {
  let component: M3mProjectListComponent;
  let fixture: ComponentFixture<M3mProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M3mProjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3mProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
