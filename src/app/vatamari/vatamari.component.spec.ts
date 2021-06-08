import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatamariComponent } from './vatamari.component';

describe('VatamariComponent', () => {
  let component: VatamariComponent;
  let fixture: ComponentFixture<VatamariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatamariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VatamariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
