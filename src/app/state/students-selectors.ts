import { createSelector } from "@ngrx/store";
import { StudentsRecords } from "./students-records";

export interface AppState {
    students: StudentsRecords[]
}

export const selectFeature = (state: AppState) => state.students;

export const selectAll = createSelector(selectFeature, (state: StudentsRecords[]) => state);