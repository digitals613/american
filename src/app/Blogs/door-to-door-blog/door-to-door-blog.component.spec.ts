import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorToDoorBlogComponent } from './door-to-door-blog.component';

describe('DoorToDoorBlogComponent', () => {
  let component: DoorToDoorBlogComponent;
  let fixture: ComponentFixture<DoorToDoorBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorToDoorBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorToDoorBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
