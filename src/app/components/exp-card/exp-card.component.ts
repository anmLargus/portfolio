import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/class/job';

@Component({
  selector: 'app-exp-card',
  templateUrl: './exp-card.component.html',
  styleUrls: ['./exp-card.component.scss']
})
export class ExpCardComponent implements OnInit {

  @Input() job: Job = new Job();

  constructor() { }

  ngOnInit(): void {
  }

}
