import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeBoardPage } from './life-board.page';

describe('LifeBoardPage', () => {
  let component: LifeBoardPage;
  let fixture: ComponentFixture<LifeBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeBoardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
