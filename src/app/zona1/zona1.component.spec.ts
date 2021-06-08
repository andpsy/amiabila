import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona1Component } from './zona1.component';

describe('Zona1Component', () => {
  let component: Zona1Component;
  let fixture: ComponentFixture<Zona1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
