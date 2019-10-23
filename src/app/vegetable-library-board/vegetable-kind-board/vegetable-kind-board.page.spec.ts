import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableKindBoardPage } from './vegetable-kind-board.page';

describe('VegetableKindBoardPage', () => {
  let component: VegetableKindBoardPage;
  let fixture: ComponentFixture<VegetableKindBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableKindBoardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableKindBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
