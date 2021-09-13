import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftersendComponent } from './aftersend.component';

describe('AftersendComponent', () => {
  let component: AftersendComponent;
  let fixture: ComponentFixture<AftersendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AftersendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AftersendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
