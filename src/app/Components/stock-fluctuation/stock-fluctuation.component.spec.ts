import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockFluctuationComponent } from './stock-fluctuation.component';

describe('StockFluctuationComponent', () => {
  let component: StockFluctuationComponent;
  let fixture: ComponentFixture<StockFluctuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockFluctuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockFluctuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
