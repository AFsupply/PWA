import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotBoardPage } from './bot-board.page';

describe('BotBoardPage', () => {
  let component: BotBoardPage;
  let fixture: ComponentFixture<BotBoardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotBoardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotBoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
