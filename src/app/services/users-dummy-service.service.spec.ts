import { TestBed } from '@angular/core/testing';

import { UsersDummyServiceService } from './users-dummy-service.service';

describe('UsersDummyServiceService', () => {
  let service: UsersDummyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDummyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
