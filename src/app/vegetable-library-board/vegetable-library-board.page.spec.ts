import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableLibraryBoardPage } from './vegetable-library-board.page';

describe('VegetableLibraryBoardPage', () => {
  let component: VegetableLibraryBoardPage;
  let fixture: ComponentFixture<VegetableLibraryBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableLibraryBoardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableLibraryBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
