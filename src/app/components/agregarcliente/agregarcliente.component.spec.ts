import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarclienteComponent } from './agregarcliente.component';

describe('AgregarclienteComponent', () => {
  let component: AgregarclienteComponent;
  let fixture: ComponentFixture<AgregarclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarclienteComponent]
    });
    fixture = TestBed.createComponent(AgregarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
