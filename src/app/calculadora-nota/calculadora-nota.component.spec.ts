import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraNotasComponent } from './calculadora-nota.component';

describe('CalculadoraNotaComponent', () => {
  let component: CalculadoraNotasComponent;
  let fixture: ComponentFixture<CalculadoraNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculadoraNotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculadoraNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
