import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditiiComponent } from './conditii.component';

describe('ConditiiComponent', () => {
  let component: ConditiiComponent;
  let fixture: ComponentFixture<ConditiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
