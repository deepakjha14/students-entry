import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { actionsList } from "./students-records.action";
import { StudentsRecordsService } from '../services/students-records.service';

@Injectable()
export class StudentsRecordsEffects {
    loadStudentsRecords$ = createEffect(() => this.actions$.pipe(
        ofType(actionsList.callStudentsRecordsApi),
        exhaustMap(() => this.studentsRecordsService.getStudentsRecords()
        .pipe(
            map(studentsRecords => ({ type: actionsList.callStudentsRecordsApiSuccess, payload: studentsRecords })),
            catchError(() => EMPTY)
        ))
    ));

    constructor(
        private actions$: Actions,
        private studentsRecordsService: StudentsRecordsService
    ){}
}