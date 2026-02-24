import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3mEnquiryListComponent } from './m3m-enquiry-list.component';

describe('M3mEnquiryListComponent', () => {
  let component: M3mEnquiryListComponent;
  let fixture: ComponentFixture<M3mEnquiryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M3mEnquiryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3mEnquiryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
