import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8080/api/v1/jsonHandle/'; // Adjust this according to your backend

  constructor(private http: HttpClient, private auth: AuthService) {}

  // Upload JSON data to the backend with authorization
  uploadJson(jsonData: any): Observable<any> {
    const token = this.auth.getToken(); // Retrieve the token from AuthService

    console.log("-->",token);
    
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/uploadJson`, { jsonData }, { headers });
  }

  // Fetch the data list from the backend with authorization
  getDataList(): Observable<any> {
    const token = this.auth.getToken(); // Retrieve the token from AuthService
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.apiUrl}/retriveJson`, { headers });
  }
}