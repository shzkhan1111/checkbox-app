import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counteroutput',
  standalone: true,
  imports: [],
  templateUrl: './counteroutput.component.html',
  styleUrl: './counteroutput.component.scss'
})


export class CounteroutputComponent implements OnInit {
  //how the structure of store data is present
  counter:number = 0;
  constructor(private store : Store<{counter : {counter:number}}>) {

  }
  ngOnInit(): void {
    this.store.select('counter').subscribe(data =>{
      this.counter = data.counter
    })
  }
}
