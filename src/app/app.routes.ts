import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

// import { DashboardComponent } from "./dashboard/dashboard.component";
import { StudentsTableComponent } from './students-table/students-table.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "dashboard",
        component: StudentsTableComponent
    }
];
