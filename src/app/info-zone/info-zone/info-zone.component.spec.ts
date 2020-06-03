import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoZoneComponent } from './info-zone.component';

describe('InfoZoneComponent', () => {
  let component: InfoZoneComponent;
  let fixture: ComponentFixture<InfoZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
