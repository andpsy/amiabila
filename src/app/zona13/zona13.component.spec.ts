import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona13Component } from './zona13.component';

describe('Zona13Component', () => {
  let component: Zona13Component;
  let fixture: ComponentFixture<Zona13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
