import { TestBed } from '@angular/core/testing';

import { MongoDbService } from './mongo-db.service';

describe('MongoDbServiceService', () => {
  let service: MongoDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MongoDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
