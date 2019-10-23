import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastHarvestVegetableComponent } from './last-harvest-vegetable.component';

describe('LastHarvestVegetableComponent', () => {
  let component: LastHarvestVegetableComponent;
  let fixture: ComponentFixture<LastHarvestVegetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastHarvestVegetableComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastHarvestVegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
