import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../jobs.service'
import { parse } from 'querystring';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  protected jobId;

  constructor(
    private route: ActivatedRoute
  ) { }
  
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.jobId = id;
  }
}
