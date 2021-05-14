import { TestBed } from '@angular/core/testing';

import { PinCallService } from './pin-call.service';

describe('PinCallService', () => {
  let service: PinCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
