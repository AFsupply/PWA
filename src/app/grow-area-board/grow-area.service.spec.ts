import { TestBed } from '@angular/core/testing';

import { GrowAreaService } from './grow-area.service';

describe('GrowAreaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrowAreaService = TestBed.get(GrowAreaService);
    expect(service).toBeTruthy();
  });
});
