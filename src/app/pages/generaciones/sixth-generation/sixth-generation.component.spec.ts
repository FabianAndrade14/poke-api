import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthGenerationComponent } from './sixth-generation.component';

describe('SixthGenerationComponent', () => {
  let component: SixthGenerationComponent;
  let fixture: ComponentFixture<SixthGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
