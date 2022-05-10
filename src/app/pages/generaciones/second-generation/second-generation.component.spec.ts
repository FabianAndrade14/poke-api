import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGenerationComponent } from './second-generation.component';

describe('SecondGenerationComponent', () => {
  let component: SecondGenerationComponent;
  let fixture: ComponentFixture<SecondGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
