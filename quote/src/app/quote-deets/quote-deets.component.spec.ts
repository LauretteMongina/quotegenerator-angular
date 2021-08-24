import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDeetsComponent } from './quote-deets.component';

describe('QuoteDeetsComponent', () => {
  let component: QuoteDeetsComponent;
  let fixture: ComponentFixture<QuoteDeetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteDeetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
