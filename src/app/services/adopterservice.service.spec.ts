import { TestBed, inject } from '@angular/core/testing';

import { AdopterserviceService } from './adopterservice.service';

describe('AdopterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdopterserviceService]
    });
  });

  it('should be created', inject([AdopterserviceService], (service: AdopterserviceService) => {
    expect(service).toBeTruthy();
  }));
});
