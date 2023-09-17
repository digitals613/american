import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundSettlementAgreementComponent } from './refund-settlement-agreement.component';

describe('RefundSettlementAgreementComponent', () => {
  let component: RefundSettlementAgreementComponent;
  let fixture: ComponentFixture<RefundSettlementAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefundSettlementAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundSettlementAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
