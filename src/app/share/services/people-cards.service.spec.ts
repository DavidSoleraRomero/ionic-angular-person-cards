import { TestBed } from '@angular/core/testing';

import { PeopleCardsService } from './people-cards.service';

describe('PeopleService', () => {
  let service: PeopleCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
