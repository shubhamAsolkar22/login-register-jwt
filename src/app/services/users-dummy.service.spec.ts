import { TestBed } from '@angular/core/testing';

import { UsersDummyService } from './users-dummy.service';

describe('UsersDummyServiceService', () => {
  let service: UsersDummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
