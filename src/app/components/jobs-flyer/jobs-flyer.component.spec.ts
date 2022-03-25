import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFlyerComponent } from './jobs-flyer.component';

describe('JobsFlyerComponent', () => {
  let component: JobsFlyerComponent;
  let fixture: ComponentFixture<JobsFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsFlyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
