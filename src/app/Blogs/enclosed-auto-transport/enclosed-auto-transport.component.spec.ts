import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnclosedAutoTransportComponent } from './enclosed-auto-transport.component';

describe('EnclosedAutoTransportComponent', () => {
  let component: EnclosedAutoTransportComponent;
  let fixture: ComponentFixture<EnclosedAutoTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnclosedAutoTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnclosedAutoTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
