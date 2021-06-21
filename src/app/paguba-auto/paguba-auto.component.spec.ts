import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagubaAutoComponent } from './paguba-auto.component';

describe('PagubaAutoComponent', () => {
  let component: PagubaAutoComponent;
  let fixture: ComponentFixture<PagubaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagubaAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagubaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
