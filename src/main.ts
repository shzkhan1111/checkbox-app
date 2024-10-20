import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { _counterReducer } from './app/counter/counter/state/counter.reducer';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { isDevMode, importProvidersFrom } from '@angular/core';  // importProvidersFrom for module imports
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const appConfig = {
  providers: [
    provideStore({ counter: _counterReducer }),  // Provide the store with the reducer
    provideRouter(routes),
    importProvidersFrom(
      StoreDevtoolsModule.instrument({
        logOnly: !isDevMode(),  // Restrict extension to log-only mode in production
      })
    )
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
