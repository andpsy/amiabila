import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaFisiereComponent } from './zona-fisiere.component';

describe('ZonaFisiereComponent', () => {
  let component: ZonaFisiereComponent;
  let fixture: ComponentFixture<ZonaFisiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaFisiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaFisiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
