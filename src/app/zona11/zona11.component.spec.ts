import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona11Component } from './zona11.component';

describe('Zona11Component', () => {
  let component: Zona11Component;
  let fixture: ComponentFixture<Zona11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
