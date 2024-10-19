import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { CounterState } from '../counter/state/counter.state';
import { Store } from '@ngrx/store';
import { changeChannelName, customIncrement } from '../counter/state/counter.action';
import { getChannelName } from '../counter/state/counter.selector';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-custom-component-input',
  standalone: true,
  imports: [FormsModule, CommonModule ],
  templateUrl: './custom-component-input.component.html',
  styleUrl: './custom-component-input.component.scss'
})
export class CustomComponentInputComponent implements OnInit {
  onchangeChannelName() {
    //channel name present in state for it we need to create an action
    this.store.dispatch(changeChannelName());
}
  value :number = 1;
  channelName$! : Observable<string>

  constructor(private store : Store<{counter : CounterState}>) {

  }
  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName)
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

}
