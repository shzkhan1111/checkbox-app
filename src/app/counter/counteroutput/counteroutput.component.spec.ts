import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounteroutputComponent } from './counteroutput.component';

describe('CounteroutputComponent', () => {
  let component: CounteroutputComponent;
  let fixture: ComponentFixture<CounteroutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounteroutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounteroutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
