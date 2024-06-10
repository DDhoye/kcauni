import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup

  email : string = '';
  password : string = '';

  constructor(private formBuilder:FormBuilder,private router: Router, private http:HttpClient, private auth : AuthService) { }

  ngOnInit(): void {


    /** */ 

    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    })

  }

  

  login(){
    if(this.email == ''){
      alert('Please enter email');
    }

    if(this.password == ''){
      alert('Please enter password');
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';


  }

 /**
  * //login of user
  login() {
    this.http.get<any>("http://localhost:3000/signup").subscribe(res => {
      console.log('API Response', res); // log the API response
      
      // Match email and password
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;
      });
  
      // Condition for login
      if (user) {
        alert("Login Successful");
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      } else {
        alert("Invalid credentials. Please try again."); // Alert for invalid credentials
      }
    }, err => {
      alert("Something went wrong");
    });
  }

  */

  
  

}
