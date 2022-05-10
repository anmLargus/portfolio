import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-skill-cloud',
  templateUrl: './skill-cloud.component.html',
  styleUrls: ['./skill-cloud.component.scss']
})
export class SkillCloudComponent implements OnInit {

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 250,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 250,
    overflow: false,
  };

  data: CloudData[] = [
    { text: 'Angular', weight: 8},
    { text: 'HTML + CSS', weight: 7 },
    { text: 'R', weight: 9},
    { text: 'MySQL', weight: 5},
    { text: 'JavaScript', weight: 5},
    { text: 'Java', weight: 5}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
