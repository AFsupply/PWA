import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastVegetableKindAddedComponent } from './last-vegetable-kind-added.component';

describe('LastVegetableKindAddedComponent', () => {
  let component: LastVegetableKindAddedComponent;
  let fixture: ComponentFixture<LastVegetableKindAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastVegetableKindAddedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastVegetableKindAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
