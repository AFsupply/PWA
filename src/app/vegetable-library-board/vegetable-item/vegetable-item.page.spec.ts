import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableItemPage } from './vegetable-item.page';

describe('VegetableItemPage', () => {
  let component: VegetableItemPage;
  let fixture: ComponentFixture<VegetableItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
