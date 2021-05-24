import { TestBed } from '@angular/core/testing';

import { MainSearchService } from './main-search.service';

describe('MainSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainSearchService = TestBed.get(MainSearchService);
    expect(service).toBeTruthy();
  });
});
