import { TestBed } from '@angular/core/testing';

import { EnginsService } from './engins.service';

describe('EnginsService', () => {
  let service: EnginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
