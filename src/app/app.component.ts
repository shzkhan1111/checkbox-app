import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxListComponent } from "./checkbox-list/checkbox-list.component";
import { CounterComponent } from "./counter/counter/counter.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CheckboxListComponent, CounterComponent, HeaderComponent]
})
export class AppComponent {
  title = 'checkbox-app';
}
