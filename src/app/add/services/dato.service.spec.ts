import { TestBed } from '@angular/core/testing';

import { DatoService } from './dato.service';

describe('DatoService', () => {
  let service: DatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
