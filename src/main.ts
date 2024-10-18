  import { bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app.component';
  import { provideStore } from '@ngrx/store';
  import { _counterReducer } from './app/counter/counter/state/counter.reducer';

  const appConfig = {
    providers: [
      provideStore({ counter: _counterReducer })  // Provide the store with the reducer
    ]
  };

  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error(err));