import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/v1/auth/';

  constructor(private http: HttpClient, private router:Router) { }

  register(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.apiUrl}register`, body).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token); // Store token on success
      }),
      catchError(this.handleError)
    );
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    console.log(username+" "+password);
    return this.http.post(`${this.apiUrl}login`, body).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['home']);
      }),
      catchError(this.handleError) // Handle errors
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    // Retrieve the token from localStorage or any other storage mechanism
    return localStorage.getItem('token') || '';
  }

  

  private handleError(error: HttpErrorResponse) {
    console.log("-->",error);
    
    let errorMsg = error.error.message || 'An unknown error occurred!';
    if (error.status === 401) {
      errorMsg = 'Invalid username or password.';
    }
    return throwError(errorMsg);
  }

}
