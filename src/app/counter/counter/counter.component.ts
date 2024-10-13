import { Component, OnInit } from '@angular/core';
import { CounteroutputComponent } from "../counteroutput/counteroutput.component";
import { CounterbuttonComponent } from "../counterbutton/counterbutton.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounteroutputComponent, CounterbuttonComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
  }



}
