import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  loader: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }
    this.loader = true;
    this.authService.register(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(['home']);
        this.loader = false;
      },
      (error) => {
        this.errorMessage = error;

        console.error('Error:', error);
        this.loader = false;
      }
    );
  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
