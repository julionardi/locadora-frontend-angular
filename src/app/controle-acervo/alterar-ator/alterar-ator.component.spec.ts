import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAtorComponent } from './alterar-ator.component';

describe('AlterarAtorComponent', () => {
  let component: AlterarAtorComponent;
  let fixture: ComponentFixture<AlterarAtorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarAtorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
