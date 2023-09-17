import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierAgreementComponent } from './carrier-agreement.component';

describe('CarrierAgreementComponent', () => {
  let component: CarrierAgreementComponent;
  let fixture: ComponentFixture<CarrierAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
