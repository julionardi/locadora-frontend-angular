import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAtoresComponent } from './listagem-atores.component';

describe('ListagemAtoresComponent', () => {
  let component: ListagemAtoresComponent;
  let fixture: ComponentFixture<ListagemAtoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemAtoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemAtoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
