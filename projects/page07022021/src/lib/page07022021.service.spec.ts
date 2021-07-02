import { TestBed } from '@angular/core/testing';

import { Page07022021Service } from './page07022021.service';

describe('Page07022021Service', () => {
  let service: Page07022021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Page07022021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
