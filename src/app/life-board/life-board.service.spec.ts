import { TestBed } from '@angular/core/testing';

import { LifeBoardService } from './life-board.service';

describe('LifeBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeBoardService = TestBed.get(LifeBoardService);
    expect(service).toBeTruthy();
  });
});
