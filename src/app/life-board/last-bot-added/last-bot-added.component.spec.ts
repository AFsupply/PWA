import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBotAddedComponent } from './last-bot-added.component';

describe('LastBotAddedComponent', () => {
  let component: LastBotAddedComponent;
  let fixture: ComponentFixture<LastBotAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastBotAddedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastBotAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
