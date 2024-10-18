import { Component, OnInit } from '@angular/core';
import { CounteroutputComponent } from "../counteroutput/counteroutput.component";
import { CounterbuttonComponent } from "../counterbutton/counterbutton.component";
import { CustomComponentInputComponent } from "../custom-component-input/custom-component-input.component";

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CounteroutputComponent, CounterbuttonComponent, CustomComponentInputComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
  }



}
