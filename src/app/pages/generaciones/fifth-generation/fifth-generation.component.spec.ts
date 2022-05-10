import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthGenerationComponent } from './fifth-generation.component';

describe('FifthGenerationComponent', () => {
  let component: FifthGenerationComponent;
  let fixture: ComponentFixture<FifthGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
