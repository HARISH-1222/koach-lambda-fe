import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = this.getToken(); // Get the token from localStorage

    if (token) {
      return true; // Allow access if token is present
    } else {
      this.router.navigate(['/login']); // Redirect to login if no token
      return false;
    }
  }

  // Function to get token from localStorage
  private getToken(): string | null {
    return localStorage.getItem('token'); // Replace 'token' with your actual localStorage key
  }
}
