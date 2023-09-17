import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexasCarShippingComponent } from './texas-car-shipping.component';

describe('TexasCarShippingComponent', () => {
  let component: TexasCarShippingComponent;
  let fixture: ComponentFixture<TexasCarShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexasCarShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexasCarShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
