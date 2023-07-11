import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienessomosComponentComponent } from './quienessomos-component.component';

describe('QuienessomosComponentComponent', () => {
  let component: QuienessomosComponentComponent;
  let fixture: ComponentFixture<QuienessomosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuienessomosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuienessomosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
