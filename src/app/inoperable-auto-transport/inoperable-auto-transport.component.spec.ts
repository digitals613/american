import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoperableAutoTransportComponent } from './inoperable-auto-transport.component';

describe('InoperableAutoTransportComponent', () => {
  let component: InoperableAutoTransportComponent;
  let fixture: ComponentFixture<InoperableAutoTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoperableAutoTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InoperableAutoTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
