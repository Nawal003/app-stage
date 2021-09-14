import { TestBed } from '@angular/core/testing';

import { TourneesService } from './tournees.service';

describe('TourneesService', () => {
  let service: TourneesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourneesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
