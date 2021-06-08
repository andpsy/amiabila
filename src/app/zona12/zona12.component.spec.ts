import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona12Component } from './zona12.component';

describe('Zona12Component', () => {
  let component: Zona12Component;
  let fixture: ComponentFixture<Zona12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
