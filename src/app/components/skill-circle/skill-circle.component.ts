import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Skill } from 'src/app/class/skill';

@Component({
  selector: 'app-skill-circle',
  templateUrl: './skill-circle.component.html',
  styleUrls: ['./skill-circle.component.scss']
})
export class SkillCircleComponent implements OnInit , OnChanges {
  
  @Input() skill: Skill = new Skill();

  @Input() value: number = 1;
  
  radius = 54;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: number = 1;

  constructor() {
    this.progress(0);
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'].currentValue !== changes['value'].previousValue) {
      this.progress(changes['value'].currentValue);
    }
  } 

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }
}

// https://coryrylan.com/blog/angular-progress-component-with-svg x progress bar


