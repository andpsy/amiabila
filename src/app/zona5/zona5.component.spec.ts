import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona5Component } from './zona5.component';

describe('Zona5Component', () => {
  let component: Zona5Component;
  let fixture: ComponentFixture<Zona5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
