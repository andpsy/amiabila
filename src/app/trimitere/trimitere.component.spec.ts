import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimitereComponent } from './trimitere.component';

describe('TrimitereComponent', () => {
  let component: TrimitereComponent;
  let fixture: ComponentFixture<TrimitereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimitereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimitereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
