import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zona6Component } from './zona6.component';

describe('Zona6Component', () => {
  let component: Zona6Component;
  let fixture: ComponentFixture<Zona6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zona6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Zona6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
