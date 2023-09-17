import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaineAutoTransportComponent } from './maine-auto-transport.component';

describe('MaineAutoTransportComponent', () => {
  let component: MaineAutoTransportComponent;
  let fixture: ComponentFixture<MaineAutoTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaineAutoTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaineAutoTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
