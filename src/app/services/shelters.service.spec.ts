import { TestBed, inject } from '@angular/core/testing';

import { SheltersService } from './shelters.service';

describe('SheltersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheltersService]
    });
  });

  it('should be created', inject([SheltersService], (service: SheltersService) => {
    expect(service).toBeTruthy();
  }));
});
