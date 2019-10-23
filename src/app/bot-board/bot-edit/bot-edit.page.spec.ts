import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotEditPage } from './bot-edit.page';

describe('BotEditPage', () => {
  let component: BotEditPage;
  let fixture: ComponentFixture<BotEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
