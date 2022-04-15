import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduFlyerComponent } from './edu-flyer.component';

describe('EduFlyerComponent', () => {
  let component: EduFlyerComponent;
  let fixture: ComponentFixture<EduFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduFlyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
