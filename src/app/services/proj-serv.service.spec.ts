import { TestBed } from '@angular/core/testing';

import { ProjServService } from './proj-serv.service';

describe('ProjServService', () => {
  let service: ProjServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
