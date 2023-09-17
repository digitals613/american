import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowbirdAutoTransportComponent } from './snowbird-auto-transport.component';

describe('SnowbirdAutoTransportComponent', () => {
  let component: SnowbirdAutoTransportComponent;
  let fixture: ComponentFixture<SnowbirdAutoTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowbirdAutoTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowbirdAutoTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
