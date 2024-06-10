import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  //hide
  showadd! : boolean;
  showupdate! : boolean;

  formValue!:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.formValue=this.formBuilder.group({
      name: ['', Validators.required],
      admNo: ['', Validators.required],
      course: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required]
  
    })
  }

}
