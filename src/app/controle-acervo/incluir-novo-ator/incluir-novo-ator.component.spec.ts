import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirNovoAtorComponent } from './incluir-novo-ator.component';

describe('IncluirNovoAtorComponent', () => {
  let component: IncluirNovoAtorComponent;
  let fixture: ComponentFixture<IncluirNovoAtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirNovoAtorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncluirNovoAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
