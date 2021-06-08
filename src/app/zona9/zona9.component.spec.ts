import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona9Component } from './zona9.component';

describe('Zona9Component', () => {
  let component: Zona9Component;
  let fixture: ComponentFixture<Zona9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
