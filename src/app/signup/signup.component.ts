import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm! :FormGroup
  name : string = '';
  email : string = '';
  mobile : string = '' ;
  password : string = '';




  constructor(private formBuilder:FormBuilder, private http :HttpClient, private router :Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.signupForm =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
    })

  }


  register(){
    if(this.email == ''){
      alert('Please enter email');
    }

    if(this.password == ''){
      alert('Please enter password');
    }

    this.auth.register(this.name, this.email, this.mobile, this.password);
    this.name = '';
    this.email = '';
    this.mobile = '';
    this.password = '';


  }

  /**
   *   //Creation of user
  signup(){
    this.http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res=>{
      alert("User added succesfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("something went wrong")
    })
  }
   */



}
