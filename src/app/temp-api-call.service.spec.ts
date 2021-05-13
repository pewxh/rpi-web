import { TestBed } from '@angular/core/testing';

import { TempApiCallService } from './temp-api-call.service';

describe('TempApiCallService', () => {
  let service: TempApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
