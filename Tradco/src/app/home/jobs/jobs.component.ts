import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EventEmitter } from 'events';
import { JobsService } from '../../jobs.service'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  @Output() onClicked = new EventEmitter()

  constructor(
    private route:ActivatedRoute,
    private movieService:JobsService

  ) { }

  job = []
  

  ngOnInit() {
    this.loadJob();
  }

  selJob() {
    const jobId = this.route.snapshot.paramMap.get('id');
  }

  onClick(value) {
    alert('please take a picture before taking the survey')
    this.onClicked.emit(value)
  }


  loadJob() {
    this.job = this.movieService.getJobs()
  }
}
