import { TestBed } from '@angular/core/testing';

import { KeevoDesafioApiService } from './keevo-desafio-api.service';

describe('KeevoDesafioApiService', () => {
  let service: KeevoDesafioApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeevoDesafioApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
