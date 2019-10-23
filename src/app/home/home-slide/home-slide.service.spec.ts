import { TestBed } from '@angular/core/testing';

import { HomeSlideService } from './home-slide.service';

describe('HomeSlideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeSlideService = TestBed.get(HomeSlideService);
    expect(service).toBeTruthy();
  });
});
