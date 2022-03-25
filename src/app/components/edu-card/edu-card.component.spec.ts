import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduCardComponent } from './edu-card.component';

describe('EduCardComponent', () => {
  let component: EduCardComponent;
  let fixture: ComponentFixture<EduCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
