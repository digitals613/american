import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensylvaniaAutoTransportComponent } from './pensylvania-auto-transport.component';

describe('PensylvaniaAutoTransportComponent', () => {
  let component: PensylvaniaAutoTransportComponent;
  let fixture: ComponentFixture<PensylvaniaAutoTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensylvaniaAutoTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensylvaniaAutoTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
