import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona2Component } from './zona2.component';

describe('Zona2Component', () => {
  let component: Zona2Component;
  let fixture: ComponentFixture<Zona2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
