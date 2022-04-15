import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/class/job';

import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.scss']
})
export class ExpCardComponent implements OnInit {

  isEditable = false;
  faCircleMinus = faCircleMinus;

  @Input() job: Job = new Job();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log("onDelete job!");
  }

}
