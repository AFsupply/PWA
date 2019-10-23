import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotItemPage } from './bot-item.page';

describe('BotItemPage', () => {
  let component: BotItemPage;
  let fixture: ComponentFixture<BotItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
