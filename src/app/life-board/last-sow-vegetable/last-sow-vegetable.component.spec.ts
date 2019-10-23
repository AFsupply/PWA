import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSowVegetableComponent } from './last-sow-vegetable.component';

describe('LastSowVegetableComponent', () => {
  let component: LastSowVegetableComponent;
  let fixture: ComponentFixture<LastSowVegetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastSowVegetableComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSowVegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
