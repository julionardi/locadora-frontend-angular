import { TestBed } from '@angular/core/testing';

import { ListagemAtoresService } from './listagem-atores.service';

describe('ListagemAtoresService', () => {
  let service: ListagemAtoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagemAtoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
