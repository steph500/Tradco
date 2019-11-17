import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { EventEmitter } from 'events';
import { JobsService } from '../../jobs.service'
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() onClicked = new EventEmitter()


  name  = 'Esther';
  date = [];
  setPosition: any;
  job = [];


  constructor(
    private route:ActivatedRoute,
    private jobService:JobsService,
    private firestore:AngularFirestore

  ) { }

  setName() {
    this.name = 'Stephen';
  }

  onClick(value) {
    alert('please take a picture before taking the survey')
    this.onClicked.emit(value)
    this.getDetails();
  }

  getDetails() {
    this.date.push(new Date())
    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
  }

  getJob() {
    return this.firestore.collection('Jobs').snapshotChanges();
  }

  ngOnInit() {
    //this.jobService.getJobs()
    //  .subscribe(data => this.job = data );

    this.getJob()
    .subscribe(data => this.job = data );
    console.log(this.job)
  }
}
