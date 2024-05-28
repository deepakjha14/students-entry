import { StudentsRecords } from "./students-records";

import { createReducer, on } from "@ngrx/store";

import * as Actions from "./students-records.action";

export const initState: {studentsRecords: StudentsRecords[]} = {
    studentsRecords: [{
        name: "Deepak",
        city: "Ajmer",
        country: "India",
        subject: "Rajasthan",
        passportDeclaration: "Yes",
        fitnessDeclaration: "Yes",
        courseName: "Match",
        date: "14-11-1983",
        state: "Rajasthan",
        street: "5th street",
        email: "deepak@example.com",
        phone: "123123123",
        postalCode: 12345,
    }]
};

export const studentsReducer = createReducer(
    initState,
    on(Actions.callStudentsRecordsApiSuccess, (state: any, { payload }: any) => ({ ...state, studentsRecords: payload }))
);