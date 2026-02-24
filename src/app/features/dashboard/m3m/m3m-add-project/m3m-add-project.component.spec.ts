import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3mAddProjectComponent } from './m3m-add-project.component';

describe('M3mAddProjectComponent', () => {
  let component: M3mAddProjectComponent;
  let fixture: ComponentFixture<M3mAddProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M3mAddProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3mAddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
