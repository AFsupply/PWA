import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowAreaListComponent } from './grow-area-list.component';

describe('GrowAreaListComponent', () => {
  let component: GrowAreaListComponent;
  let fixture: ComponentFixture<GrowAreaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowAreaListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowAreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
