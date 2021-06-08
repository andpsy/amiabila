import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona3Component } from './zona3.component';

describe('Zona3Component', () => {
  let component: Zona3Component;
  let fixture: ComponentFixture<Zona3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
