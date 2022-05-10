import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthGenerationComponent } from './eighth-generation.component';

describe('EighthGenerationComponent', () => {
  let component: EighthGenerationComponent;
  let fixture: ComponentFixture<EighthGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EighthGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EighthGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
