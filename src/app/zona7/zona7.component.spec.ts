import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona7Component } from './zona7.component';

describe('Zona7Component', () => {
  let component: Zona7Component;
  let fixture: ComponentFixture<Zona7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
