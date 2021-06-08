import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona4Component } from './zona4.component';

describe('Zona4Component', () => {
  let component: Zona4Component;
  let fixture: ComponentFixture<Zona4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
