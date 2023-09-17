import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostReliableAutoTransportComponent } from './most-reliable-auto-transport.component';

describe('MostReliableAutoTransportComponent', () => {
  let component: MostReliableAutoTransportComponent;
  let fixture: ComponentFixture<MostReliableAutoTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostReliableAutoTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostReliableAutoTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
