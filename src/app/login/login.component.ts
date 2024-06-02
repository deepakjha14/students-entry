import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    constructor(private authService: AuthService, private router: Router) { }
    
    ngOnInit(): void {
        this.loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
        });
    }

    onClickLogin() {
		// Implement your authentication logic here, e.g., send credentials to backend
		if (this.loginForm.valid) {
			console.log('Form submitted with:', this.loginForm.value);
		}
		
		this.authService.login().subscribe(
			()=> {
				if (this.authService.isLoggedIn) {
					// Usually you would use the redirect URL from the auth service.
					// However to keep the example simple, we will always redirect to `/admin`.
					const redirectUrl = '/dashboard';
	
					// Set our navigation extras object
					// that passes on our global query params and fragment
					const navigationExtras: NavigationExtras = {
						queryParamsHandling: 'preserve',
						preserveFragment: true
					};
	
					// Redirect the user
					this.router.navigate([redirectUrl], navigationExtras);
				}
			}
		);
	}
}
