import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from "@ngrx/store";
import { Observable, Subject} from "rxjs";
import { StudentsRecords } from "../state/students-records";
import { AppState, selectAll } from "../state/students-selectors";

@Component({
    selector: 'app-students-table',
    standalone: true,
    imports: [ MatTableModule ],
    templateUrl: './students-table.component.html',
    styleUrl: './students-table.component.scss'
})
export class StudentsTableComponent implements OnInit {
    dataSource: any = [];
    dataSource$: Observable<StudentsRecords[]> = this.store.select(selectAll);
    displayColumns: string[] = ['name', 'city', 'country', 'subject', 'passportDeclaration', 'fitnessDeclaration', 'courseName', 'date', 'state', 'street', 'email', 'phone', 'postalCode'];
    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.dataSource$.subscribe(
            (res: any) => {
                this.dataSource = res;
            } 
        );
    }
}