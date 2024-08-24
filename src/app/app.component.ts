import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckboxListComponent } from "./checkbox-list/checkbox-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CheckboxListComponent]
})
export class AppComponent {
  title = 'checkbox-app';
}
