import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Store } from "@ngrx/store";
import { Observable, Subject} from "rxjs";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { StudentsRecords } from "../state/students-records.model";
import { AppState, selectAllStudents, selectStudentById } from "../state/students-selectors";
import * as Actions from "../state/students-records.action";

@Component({
    selector: 'app-students-table',
    standalone: true,
    imports: [ MatTableModule, MatInputModule, MatFormFieldModule, FormsModule, ReactiveFormsModule ],
    templateUrl: './students-table.component.html',
    styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent implements OnInit {
    dataSource: any = [];
    studentsControl: FormControl = new FormControl();
    dataSource$: Observable<StudentsRecords[]> = this.store.select(selectAllStudents);
    displayColumns: string[] = ['name', 'city', 'country', 'subject', 'passportDeclaration', 'fitnessDeclaration', 'courseName', 'date', 'state', 'street', 'email', 'phone', 'postalCode'];
    constructor(private store: Store<AppState>) {
        this.store.dispatch(Actions.callStudentsRecordsApi());
    }

    ngOnInit(): void {
        this.dataSource$.subscribe(
            (res: any) => {
                this.dataSource = res;
            } 
        );

        this.studentsControl.valueChanges.subscribe(
            (value: number) => {
                if (!!value) {
                    const studentsRecord = this.store.select(selectStudentById(value));
                    studentsRecord.subscribe(
                        (res: any) => {
                            this.dataSource = [res];
                            console.log(res, "Selected Record");
                        }
                    );
                } else {
                    const studentsRecords = this.store.select(selectAllStudents);
                    studentsRecords.subscribe(
                        (res: any) => {
                            this.dataSource = res;
                            console.log(res, "All Selected Students");
                        }
                    );
                }
            }
        );
    }
}