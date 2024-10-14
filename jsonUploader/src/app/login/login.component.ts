import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl:  './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   username="";
   password="";
   errorMessage="";

  constructor(private auth:AuthService,private router:Router){ }

   login() {
    if(this.username.trim().length === 0){
      this.errorMessage = "Username is required";
    }else if(this.password.trim().length === 0){
      this.errorMessage = "Password is required";
    }else{
      this.auth.login(this.username,this.password).subscribe(
      (response) => {
        console.log('Registration successful:', response.message);
      },
      (error) => {
         this.errorMessage = error;
        
          console.error('Error:', error);
      }
      );
    }
  }

   redirectToRegister(){
    this.router.navigate(['register']);
   }
}
