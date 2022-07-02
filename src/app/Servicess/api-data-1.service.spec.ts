import { TestBed } from '@angular/core/testing';

import { ApiData1Service } from './api-data-1.service';

describe('ApiData1Service', () => {
  let service: ApiData1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiData1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
