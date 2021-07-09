import { TestBed } from '@angular/core/testing';

import { OneDayService } from './one-day.service';

describe('OneDayService', () => {
  let service: OneDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
