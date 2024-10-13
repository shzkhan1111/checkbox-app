import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxListComponent } from "./checkbox-list/checkbox-list.component";
import { CounterComponent } from "./counter/counter/counter.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CheckboxListComponent, CounterComponent]
})
export class AppComponent {
  title = 'checkbox-app';
}
