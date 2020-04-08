import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPresenterComponent } from './stock-presenter.component';

describe('StockPresenterComponent', () => {
  let component: StockPresenterComponent;
  let fixture: ComponentFixture<StockPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
