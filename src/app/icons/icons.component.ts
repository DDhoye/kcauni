 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lecturedata } from './lecture.model';
import { LecDataService } from 'app/shared/lec-data.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  //hide
  showadd! : boolean;
  showupdate! : boolean;
  lecturemodelobj:lecturedata=new lecturedata();
  alllecturedata:any;
  formValue!:FormGroup;

  constructor( private formBuilder:FormBuilder, private lecData: LecDataService) { }


  ngOnInit() {
    this.formValue=this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required]

    })
    this.getdata()
  }


  add(){
    this.showadd=true;
    this.showupdate=false;
    this.formValue.reset();

  }

  edit(data:any){
    this.showadd=false;
    this.showupdate=true;
    this.lecturemodelobj.id = data.payload.doc.id;

    this.formValue.controls['name'].setValue(data.payload.doc.data().name);
    this.formValue.controls['email'].setValue(data.payload.doc.data().email);
    this.formValue.controls['mobileNo'].setValue(data.payload.doc.data().mobileNo);
  }

  //update lecture
  update() {
    this.lecturemodelobj.name = this.formValue.value.name;
    this.lecturemodelobj.email = this.formValue.value.email;
    this.lecturemodelobj.mobileNo = this.formValue.value.mobileNo;

    this.lecData.updatelecture(this.lecturemodelobj).then(res => {
      this.formValue.reset();
      this.getdata();
      alert('Record updated successfully');
    }).catch(err => {
      alert('Something went wrong');
    });
  }

  //add lecture
  addlecture() {
    this.lecturemodelobj.name = this.formValue.value.name;
    this.lecturemodelobj.email = this.formValue.value.email;
    this.lecturemodelobj.mobileNo = this.formValue.value.mobileNo;

    this.lecData.postlecture(this.lecturemodelobj).then(res => {
      console.log(res);
      this.formValue.reset();
      this.getdata();
      alert('Record added successfully');
    }).catch(err => {
      alert('Something went wrong');
    });
  }

  //Getting data
  getdata() {
    this.lecData.getlecture().subscribe(res => {
      this.alllecturedata = res;
    });
  }

  //Deleting Lec
  deletelec(data: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.lecData.deletelecture(data.payload.doc.id).then(res => {
        alert('Record deleted successfully');
        this.getdata();
      }).catch(err => {
        alert('Something went wrong');
      });
    }
  }
}





  ////BIG BREAK OVER HERE  

/**
 * //update on edit
  update(){
    this.lecturemodelobj.name=this.formValue.value.name;
    this.lecturemodelobj.email=this.formValue.value.email;
    this.lecturemodelobj.mobileNo=this.formValue.value.mobileNo;
    
    this.api.updatestudent(this.lecturemodelobj, this.lecturemodelobj.id).subscribe(res=>{
      this.formValue.reset();
      this.getdata();
      alert('Record updated succesfully');
    },
  err=>{
    alert('Something went wrong')
  })


  }


  //API Service and student model object is already set up
  //Need to subscribe and use methods set up in api service
  //to add to database

  addlecture(){
    this.lecturemodelobj.name=this.formValue.value.name;
    this.lecturemodelobj.email=this.formValue.value.email;
    this.lecturemodelobj.mobileNo=this.formValue.value.mobileNo;

    this.api.poststudent(this.lecturemodelobj).subscribe(res=>{
      console.log(res);
      this.formValue.reset()
      this.getdata()

      alert("Record added succesfully")
    },
  err=>{
    alert("something went wrong")
  })

  }


  //Rendering data to the table

  //getdata
  getdata(){
    this.api.getstudent().subscribe(res=>{
      this.alllecturedata=res;
    })
  }

  //delete
  deletestud(data:any){
    if(confirm('Are you sure you want to delete ?'))
    this.api.deletestudent(data.id)
    .subscribe(res => {
      alert("Record deleted succesfully");
      this.getdata();
    })
  }
  



   


  
 */
  
