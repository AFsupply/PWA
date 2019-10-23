import { TestBed } from '@angular/core/testing';

import { VegetableKindService } from './vegetable-kind.service';

describe('VegetableKindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VegetableKindService = TestBed.get(VegetableKindService);
    expect(service).toBeTruthy();
  });
});
