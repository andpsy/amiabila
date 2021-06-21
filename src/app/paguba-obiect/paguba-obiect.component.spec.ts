import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagubaObiectComponent } from './paguba-obiect.component';

describe('PagubaObiectComponent', () => {
  let component: PagubaObiectComponent;
  let fixture: ComponentFixture<PagubaObiectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagubaObiectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagubaObiectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
