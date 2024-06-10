import { TestBed } from '@angular/core/testing';

import { LecDataService } from './lec-data.service';

describe('LecDataService', () => {
  let service: LecDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
