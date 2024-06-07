import { createSelector, createFeatureSelector } from "@ngrx/store";
import { StudentsRecords } from "./students-records.model";
import { adapter, StudentsRecordsState } from "./students-records";

export const selectStudentsState = createFeatureSelector<StudentsRecordsState>('students');
export interface AppState {
    students: StudentsRecords[]
}

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = adapter.getSelectors();

export const selecteStudentsEntities = createSelector(
    selectStudentsState,
    selectEntities
);

export const selectStudentById = (id: number) => createSelector(
    selecteStudentsEntities,
    (entities) => { return entities[id]; }
);

export const selectFeature = (state: AppState) => state.students;

export const selectAllStudents = createSelector(
    (state: any) => state.students,
    selectAll
);