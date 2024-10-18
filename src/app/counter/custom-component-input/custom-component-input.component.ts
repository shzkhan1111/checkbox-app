import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CounterState } from '../counter/state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../counter/state/counter.action';


@Component({
  selector: 'app-custom-component-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-component-input.component.html',
  styleUrl: './custom-component-input.component.scss'
})
export class CustomComponentInputComponent {


  constructor(private store : Store<{counter : CounterState}>) {

  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
  value :number = 1;
}
