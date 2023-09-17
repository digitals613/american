import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBreadCrumsComponent } from './services-bread-crums.component';

describe('ServicesBreadCrumsComponent', () => {
  let component: ServicesBreadCrumsComponent;
  let fixture: ComponentFixture<ServicesBreadCrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesBreadCrumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesBreadCrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
