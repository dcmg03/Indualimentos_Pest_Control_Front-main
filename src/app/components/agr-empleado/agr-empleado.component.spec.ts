import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrEmpleadoComponent } from './agr-empleado.component';

describe('AgrEmpleadoComponent', () => {
  let component: AgrEmpleadoComponent;
  let fixture: ComponentFixture<AgrEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgrEmpleadoComponent]
    });
    fixture = TestBed.createComponent(AgrEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
