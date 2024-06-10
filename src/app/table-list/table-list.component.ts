import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studentdata } from './student.model';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  showadd!: boolean;
  showupdate!: boolean;
  studentmodelobj: studentdata = new studentdata();
  allstudentdata: any;
  formValue!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.formValue = this.formBuilder.group({
      name: ['', Validators.required],
      admNo: ['', Validators.required],
      course: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required]
    });
    this.getdata();
  }

  add() {
    this.showadd = true;
    this.showupdate = false;
    this.formValue.reset();
  }

  edit(data: any) {
    this.showadd = false;
    this.showupdate = true;
    this.studentmodelobj.id = data.payload.doc.id;

    this.formValue.controls['name'].setValue(data.payload.doc.data().name);
    this.formValue.controls['admNo'].setValue(data.payload.doc.data().admNo);
    this.formValue.controls['course'].setValue(data.payload.doc.data().course);
    this.formValue.controls['email'].setValue(data.payload.doc.data().email);
    this.formValue.controls['mobileNo'].setValue(data.payload.doc.data().mobileNo);
  }

  update() {
    this.studentmodelobj.name = this.formValue.value.name;
    this.studentmodelobj.admNo = this.formValue.value.admNo;
    this.studentmodelobj.course = this.formValue.value.course;
    this.studentmodelobj.email = this.formValue.value.email;
    this.studentmodelobj.mobileNo = this.formValue.value.mobileNo;

    this.api.updatestudent(this.studentmodelobj).then(res => {
      this.formValue.reset();
      this.getdata();
      alert('Record updated successfully');
    }).catch(err => {
      alert('Something went wrong');
    });
  }

  addstudent() {
    this.studentmodelobj.name = this.formValue.value.name;
    this.studentmodelobj.admNo = this.formValue.value.admNo;
    this.studentmodelobj.course = this.formValue.value.course;
    this.studentmodelobj.email = this.formValue.value.email;
    this.studentmodelobj.mobileNo = this.formValue.value.mobileNo;

    this.api.poststudent(this.studentmodelobj).then(res => {
      console.log(res);
      this.formValue.reset();
      this.getdata();
      alert('Record added successfully');
    }).catch(err => {
      alert('Something went wrong');
    });
  }

  getdata() {
    this.api.getstudent().subscribe(res => {
      this.allstudentdata = res;
    });
  }

  deletestud(data: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.api.deletestudent(data.payload.doc.id).then(res => {
        alert('Record deleted successfully');
        this.getdata();
      }).catch(err => {
        alert('Something went wrong');
      });
    }
  }
}