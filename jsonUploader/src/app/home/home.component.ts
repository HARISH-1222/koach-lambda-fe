import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  jsonData: string = ''; // Store JSON input from the textarea
  dataList: any[] = []; // Store the data list received from the backend
  errorMessage: string = ''; // Store error messages, if any
  selectedData: any = null; // Store the currently selected JSON object

  constructor(
    private dataService: DataService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.fetchDataList(); // Fetch the data on component initialization
  }

  uploadJson() {
    this.errorMessage = ''; // Reset error message

    try {
      const parsedData = JSON.parse(this.jsonData); // Parse input JSON
      this.dataService.uploadJson(parsedData).subscribe(
        (response) => {
          console.log('Upload successful:', response);
          this.fetchDataList(); // Refresh the list after upload
          this.jsonData = ''; // Clear the textarea
        },
        (error) => {
          console.error('Upload error:', error);
          this.errorMessage = error;
        }
      );
    } catch (e) {
      this.errorMessage = 'Invalid JSON format!'; // Set error message
      console.error('JSON parse error:', e);
    }
  }


  // Fetch the data list from the backend
  fetchDataList() {
    this.dataService.getDataList().subscribe(
      (response) => {
        this.dataList = response.data; // Update this line to match your API response
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'Error fetching data!';
      }
    );
  }

  // Handle card click to display the selected data
  selectData(item: any) {
    this.selectedData = item;
  }

  logout() {
    this.auth.logout();
  }
}
