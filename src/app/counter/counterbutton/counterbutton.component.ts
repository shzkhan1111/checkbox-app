import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter/state/counter.action';

@Component({
  selector: 'app-counterbutton',
  standalone: true,
  imports: [],
  templateUrl: './counterbutton.component.html',
  styleUrl: './counterbutton.component.scss'
})
export class CounterbuttonComponent {

constructor(private store: Store<{counter : {counter:number}}>) {


}
  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
}
