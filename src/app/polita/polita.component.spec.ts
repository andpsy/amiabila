import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitaComponent } from './polita.component';

describe('PolitaComponent', () => {
  let component: PolitaComponent;
  let fixture: ComponentFixture<PolitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
