import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferCarFromTexasToCaliforniaComponent } from './transfer-car-from-texas-to-california.component';

describe('TransferCarFromTexasToCaliforniaComponent', () => {
  let component: TransferCarFromTexasToCaliforniaComponent;
  let fixture: ComponentFixture<TransferCarFromTexasToCaliforniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferCarFromTexasToCaliforniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferCarFromTexasToCaliforniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
