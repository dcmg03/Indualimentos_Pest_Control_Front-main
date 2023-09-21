import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarservicioComponent } from './agregarservicio.component';

describe('AgregarservicioComponent', () => {
  let component: AgregarservicioComponent;
  let fixture: ComponentFixture<AgregarservicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarservicioComponent]
    });
    fixture = TestBed.createComponent(AgregarservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});





