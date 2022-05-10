import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdGenerationComponent } from './third-generation.component';

describe('ThirdGenerationComponent', () => {
  let component: ThirdGenerationComponent;
  let fixture: ComponentFixture<ThirdGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
