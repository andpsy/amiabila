import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionaleComponent } from './aditionale.component';

describe('AditionaleComponent', () => {
  let component: AditionaleComponent;
  let fixture: ComponentFixture<AditionaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditionaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
