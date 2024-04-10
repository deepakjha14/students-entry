import { StudentsRecords } from "./students-records";

import { createReducer } from "@ngrx/store";

export const initState: ReadonlyArray<StudentsRecords> = [{
    name: "Deepak",
    city: "Ajmer",
    country: "India",
    subject: "Rajasthan",
    passportDeclaration: "Yes",
    fitnessDeclaration: "Yes",
    courseName: "Match",
    date: "14-11-1983",
    state: "Rajasthan",
    subjects: "Maths",
    street: "5th street",
    email: "deepak@example.com",
    phone: "123123123",
    postalCode: 12345,
}];

export const studentsReducer = createReducer(
    initState
);