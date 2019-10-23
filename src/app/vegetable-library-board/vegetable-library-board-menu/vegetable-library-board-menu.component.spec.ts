import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableLibraryBoardMenuComponent } from './vegetable-library-board-menu.component';

describe('VegetableLibraryBoardMenuComponent', () => {
  let component: VegetableLibraryBoardMenuComponent;
  let fixture: ComponentFixture<VegetableLibraryBoardMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetableLibraryBoardMenuComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableLibraryBoardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
