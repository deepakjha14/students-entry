import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTab, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-student-records',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './student-records.component.html',
  styleUrl: './student-records.component.scss'
})
export class StudentRecordsComponent {
  studentDetailsForm: FormGroup;
	closeResult: any;
	selectedRecord: any;

	get nameControl(): FormControl {
		return this.studentDetailsForm.get("name") as FormControl;
	}

	get countryControl(): FormControl {
		return this.studentDetailsForm.get("country") as FormControl;
	}

	get stateControl(): FormControl {
		return this.studentDetailsForm.get("state") as FormControl;
	}

	get passportDeclarationControl(): FormControl {
		return this.studentDetailsForm.get("passportDeclaration") as FormControl;
	}

	get fitnessDeclarationControl(): FormControl {
		return this.studentDetailsForm.get("fitnessDeclaration") as FormControl;
	}

	get courseNameControl(): FormControl {
		return this.studentDetailsForm.get("courseName") as FormControl;
	}

	get subjectsControl(): FormControl {
		return this.studentDetailsForm.get("subjects") as FormControl;
	}

	get dateControl(): FormControl {
		return this.studentDetailsForm.get("date") as FormControl;
	}

	get cityControl(): FormControl {
		return this.studentDetailsForm.get("city") as FormControl;
	}

	get streetControl(): FormControl {
		return this.studentDetailsForm.get("street") as FormControl;
	}

	get address2Control(): FormControl {
		return this.studentDetailsForm.get("address2") as FormControl;
	}

	get emailControl(): FormControl {
		return this.studentDetailsForm.get("email") as FormControl;
	}
  
	get zipControl(): FormControl {
		return this.studentDetailsForm.get("zip") as FormControl;
	}

  constructor(
    private fb: FormBuilder
  ) {
    this.studentDetailsForm = this.fb.group({
			name: this.fb.control("", [ Validators.required ]),
			country: this.fb.control("", [ Validators.required ]),
			state: this.fb.control("", [ Validators.required ]),
			passportDeclaration: this.fb.control("", [ Validators.required ]),
			fitnessDeclaration: this.fb.control("", [ Validators.required ]),
			courseName: this.fb.control("", [ Validators.required ]),
			subjects: this.fb.control("", [ Validators.required ]),
			date: this.fb.control("", [ Validators.required ]),
			city: this.fb.control("", [ Validators.required ]),
			street: this.fb.control("", [ Validators.required ]),
			address2: this.fb.control("", [ Validators.required ]),
			email: this.fb.control("", [ Validators.required ]),
			zip: this.fb.control("", [ Validators.required ])
		});
  }
}
