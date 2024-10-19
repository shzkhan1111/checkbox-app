import { Component, Input, OnInit , OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../counter/state/counter.state';
import { Observable, Subscription, share } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { getCounter } from '../counter/state/counter.selector';

@Component({
  selector: 'app-counteroutput',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './counteroutput.component.html',
  styleUrl: './counteroutput.component.scss'
})


export class CounteroutputComponent implements OnInit  {
  //how the structure of store data is present
  // counter$!: Observable<{ counter: number }>;
  counter$!:Observable<number>
  constructor(private store : Store<{counter : CounterState}>) {

  }

  ngOnInit(): void {
    // this.counter$ = this.store.select('counter')
    this.counter$ = this.store.select(getCounter)
  }


}
