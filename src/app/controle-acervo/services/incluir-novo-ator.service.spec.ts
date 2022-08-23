import { TestBed } from '@angular/core/testing';

import { IncluirNovoAtorService } from './incluir-novo-ator.service';

describe('IncluirNovoAtorService', () => {
  let service: IncluirNovoAtorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncluirNovoAtorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
