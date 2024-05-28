import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideEffects } from '@ngrx/effects';

import { routes } from './app.routes';
import { studentsReducer } from "./state/students.reducer";
import { StudentsRecordsEffects } from "./state/students-records.effects";
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideHttpClient(),
    provideAnimationsAsync(), 
    provideEffects(StudentsRecordsEffects),
    provideStore(),
    provideState({
      name: 'students',
      reducer: studentsReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};
