import { TestBed, inject } from '@angular/core/testing';

import { Gr1dUiService } from './gr1d-ui.service';

describe('Gr1dUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Gr1dUiService]
    });
  });

  it('should be created', inject([Gr1dUiService], (service: Gr1dUiService) => {
    expect(service).toBeTruthy();
  }));
});
