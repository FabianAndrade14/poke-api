import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthGenerationComponent } from './fourth-generation.component';

describe('FourthGenerationComponent', () => {
  let component: FourthGenerationComponent;
  let fixture: ComponentFixture<FourthGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
