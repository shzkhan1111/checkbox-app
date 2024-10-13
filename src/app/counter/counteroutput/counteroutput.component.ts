import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counteroutput',
  standalone: true,
  imports: [],
  templateUrl: './counteroutput.component.html',
  styleUrl: './counteroutput.component.scss'
})
export class CounteroutputComponent {
@Input() counter: number = 0;
}
