import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MartorComponent } from './martor.component';

describe('MartorComponent', () => {
  let component: MartorComponent;
  let fixture: ComponentFixture<MartorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MartorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MartorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
