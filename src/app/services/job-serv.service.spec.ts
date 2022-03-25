import { TestBed } from '@angular/core/testing';

import { JobServService } from './job-serv.service';

describe('JobServService', () => {
  let service: JobServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
