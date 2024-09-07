import { TestBed } from '@angular/core/testing';

import { AppServicesService } from './AppServices/app-services.service';

describe('AppServicesService', () => {
  let service: AppServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
