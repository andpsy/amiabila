import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona14Component } from './zona14.component';

describe('Zona14Component', () => {
  let component: Zona14Component;
  let fixture: ComponentFixture<Zona14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
