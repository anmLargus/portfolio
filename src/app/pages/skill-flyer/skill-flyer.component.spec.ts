import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillFlyerComponent } from './skill-flyer.component';

describe('SkillFlyerComponent', () => {
  let component: SkillFlyerComponent;
  let fixture: ComponentFixture<SkillFlyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillFlyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillFlyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
