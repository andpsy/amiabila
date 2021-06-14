import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumenteNecesareComponent } from './documente-necesare.component';

describe('DocumenteNecesareComponent', () => {
  let component: DocumenteNecesareComponent;
  let fixture: ComponentFixture<DocumenteNecesareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumenteNecesareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumenteNecesareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
