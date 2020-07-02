import { TestBed } from '@angular/core/testing';
import {ComandService} from './comand.service';


describe('ComandServiceService', () => {
  let service: ComandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
