import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableEditPage } from './vegetable-edit.page';

describe('VegetableEditPage', () => {
  let component: VegetableEditPage;
  let fixture: ComponentFixture<VegetableEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
