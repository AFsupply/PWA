import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableKindEditPage } from './vegetable-kind-edit.page';

describe('VegetableKindEditPage', () => {
  let component: VegetableKindEditPage;
  let fixture: ComponentFixture<VegetableKindEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableKindEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableKindEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
