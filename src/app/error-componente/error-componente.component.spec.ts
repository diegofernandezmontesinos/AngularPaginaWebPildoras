import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponenteComponent } from './error-componente.component';

describe('ErrorComponenteComponent', () => {
  let component: ErrorComponenteComponent;
  let fixture: ComponentFixture<ErrorComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
