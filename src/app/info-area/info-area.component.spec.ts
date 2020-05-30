import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAreaComponent } from './info-area.component';

describe('InfoAreaComponent', () => {
  let component: InfoAreaComponent;
  let fixture: ComponentFixture<InfoAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
