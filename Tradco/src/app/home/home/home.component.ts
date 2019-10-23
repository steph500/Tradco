import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { EventEmitter } from 'events';
import { JobsService } from '../../jobs.service'


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
    private jobService:JobsService

  ) { }

  setName() {
    this.name = 'Stephen';
  }

  onClick(value) {
    //alert('please take a picture before taking the survey')
    this.onClicked.emit(value)
    
  }


  loadJob() {
    this.job = this.jobService.getJobs()
    //const jobId = this.route.snapshot.paramMap.get('id');

  }

  getDetails() {
    this.date.push(new Date())
    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
  }

  ngOnInit() {
    this.loadJob();

  }
}
