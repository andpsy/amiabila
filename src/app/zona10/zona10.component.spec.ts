import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona10Component } from './zona10.component';

describe('Zona10Component', () => {
  let component: Zona10Component;
  let fixture: ComponentFixture<Zona10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
