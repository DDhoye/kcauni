import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { lecturedata } from '../icons/lecture.model';

@Injectable({
  providedIn: 'root'
})
export class LecDataService {

  constructor(private afsd: AngularFirestore) { }
   // Add lecture
   postlecture(lecture: lecturedata) {
    lecture.id = this.afsd.createId();
    return this.afsd.collection('/Lectures').doc(lecture.id).set(lecture.toPlainObject());
  }

  // Get all lectures
  getlecture() {
    return this.afsd.collection('/Lectures').snapshotChanges();
  }

  // Delete lectures
  deletelecture(id: string) {
    return this.afsd.doc('/Lectures/' + id).delete();
  }

  // Update lectures
  updatelecture(lecture: lecturedata) {
    return this.afsd.collection('/Lectures').doc(lecture.id).update(lecture.toPlainObject());
  }

}
