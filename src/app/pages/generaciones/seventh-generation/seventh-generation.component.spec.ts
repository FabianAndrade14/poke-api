import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhGenerationComponent } from './seventh-generation.component';

describe('SeventhGenerationComponent', () => {
  let component: SeventhGenerationComponent;
  let fixture: ComponentFixture<SeventhGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeventhGenerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
