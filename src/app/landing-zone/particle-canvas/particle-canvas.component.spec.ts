import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleCanvasComponent } from './particle-canvas.component';

describe('ParticleCanvasComponent', () => {
  let component: ParticleCanvasComponent;
  let fixture: ComponentFixture<ParticleCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParticleCanvasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
