import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona15Component } from './zona15.component';

describe('Zona15Component', () => {
  let component: Zona15Component;
  let fixture: ComponentFixture<Zona15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
