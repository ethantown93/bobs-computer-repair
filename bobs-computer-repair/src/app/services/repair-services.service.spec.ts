import { TestBed } from '@angular/core/testing';

import { RepairServicesService } from './repair-services.service';

describe('RepairServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairServicesService = TestBed.get(RepairServicesService);
    expect(service).toBeTruthy();
  });
});
