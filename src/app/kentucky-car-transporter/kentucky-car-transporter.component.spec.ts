import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KentuckyCarTransporterComponent } from './kentucky-car-transporter.component';

describe('KentuckyCarTransporterComponent', () => {
  let component: KentuckyCarTransporterComponent;
  let fixture: ComponentFixture<KentuckyCarTransporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KentuckyCarTransporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KentuckyCarTransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
