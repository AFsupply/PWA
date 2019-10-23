import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableKindItemPage } from './vegetable-kind-item.page';

describe('VegetableKindItemPage', () => {
  let component: VegetableKindItemPage;
  let fixture: ComponentFixture<VegetableKindItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableKindItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableKindItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
