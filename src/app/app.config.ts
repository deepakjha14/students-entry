import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from "@ngrx/store-devtools";

import { studentsReducer } from "./state/students.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimationsAsync(), 
    provideStore(),
    provideState({
      name: 'studentsRecords',
      reducer: studentsReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};
