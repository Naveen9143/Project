import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomcategoryComponent } from './bedroomcategory.component';

describe('BedroomcategoryComponent', () => {
  let component: BedroomcategoryComponent;
  let fixture: ComponentFixture<BedroomcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedroomcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BedroomcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
