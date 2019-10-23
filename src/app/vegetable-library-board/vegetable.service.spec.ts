import { TestBed } from '@angular/core/testing';

import { VegetableService } from './vegetable.service';

describe('VegetableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VegetableService = TestBed.get(VegetableService);
    expect(service).toBeTruthy();
  });
});
