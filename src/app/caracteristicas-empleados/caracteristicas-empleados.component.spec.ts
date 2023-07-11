import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasEmpleadosComponent } from './caracteristicas-empleados.component';

describe('CaracteristicasEmpleadosComponent', () => {
  let component: CaracteristicasEmpleadosComponent;
  let fixture: ComponentFixture<CaracteristicasEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicasEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicasEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
