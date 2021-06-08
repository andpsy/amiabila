import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona8Component } from './zona8.component';

describe('Zona8Component', () => {
  let component: Zona8Component;
  let fixture: ComponentFixture<Zona8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
