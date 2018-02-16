import { TestBed, inject } from '@angular/core/testing';

import { RecepieService } from './recepie.service';

describe('RecepieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecepieService]
    });
  });

  it('should be created', inject([RecepieService], (service: RecepieService) => {
    expect(service).toBeTruthy();
  }));
});
