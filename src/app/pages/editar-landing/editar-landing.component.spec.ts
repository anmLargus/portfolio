import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLandingComponent } from './editar-landing.component';

describe('EditarLandingComponent', () => {
  let component: EditarLandingComponent;
  let fixture: ComponentFixture<EditarLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
