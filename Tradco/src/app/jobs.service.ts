import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { job } from './jobs.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

formData: job;

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore) { }


    getJobs(){
      return this.firestore.collection('Jobs').snapshotChanges();
    }
}
 