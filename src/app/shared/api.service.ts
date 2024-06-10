import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { studentdata } from '../table-list/student.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private afs: AngularFirestore) { }

  // Add student
  poststudent(student: studentdata) {
    student.id = this.afs.createId();
    return this.afs.collection('/Students').doc(student.id).set(student.toPlainObject());
  }

  // Get all students
  getstudent() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  // Delete student
  deletestudent(id: string) {
    return this.afs.doc('/Students/' + id).delete();
  }

  // Update student
  updatestudent(student: studentdata) {
    return this.afs.collection('/Students').doc(student.id).update(student.toPlainObject());
  }
}


  /**
   * 
   *  //create post
  poststudent(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data).
    pipe(map((res:any)=>{
      return res;
    }))
  }

  //get
  getstudent(){
    return this._http.get<any>("http://localhost:3000/posts").
    pipe(map((res:any)=>{
      return res;
    }))
  }

  //update
  updatestudent(data:any,id:number){
    return this._http.put<any>("http://localhost:3000/posts/"+id,data).
    pipe(map((res:any)=>{
      return res;
    }))
  }

  //delete
  deletestudent(id:number){
    return this._http.delete<any>("http://localhost:3000/posts/"+id).
    pipe(map((res:any)=>{
      return res;
    }))

  }
   */

 




