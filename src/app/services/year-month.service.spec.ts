import { TestBed } from '@angular/core/testing';

import { YearMonthService } from './year-month.service';

describe('YearMonthService', () => {
  let service: YearMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
