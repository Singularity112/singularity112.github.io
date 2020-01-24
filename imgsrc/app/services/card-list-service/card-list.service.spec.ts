import { TestBed } from '@angular/core/testing';

import { CardListService } from './card-list.service';

describe('CardListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardListService = TestBed.get(CardListService);
    expect(service).toBeTruthy();
  });
});
