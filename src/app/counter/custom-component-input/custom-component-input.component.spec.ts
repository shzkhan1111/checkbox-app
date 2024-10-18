import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentInputComponent } from './custom-component-input.component';

describe('CustomComponentInputComponent', () => {
  let component: CustomComponentInputComponent;
  let fixture: ComponentFixture<CustomComponentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomComponentInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomComponentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
