import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../jobs.service';
import { parse } from 'querystring';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  protected jobId;
  productTitle = null;

  constructor(
    private route: ActivatedRoute,
    private service: JobsService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) { }
  
  ngOnInit() {
    this.getInfo();
    this.resetForm();
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.jobId = id;
  }

  getInfo() {
    this.productTitle= 'TESLA';
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData={
    id: null,
    jobName: '',
    employeeName: '',
    organisationName: '',
    //date: Date,
    //location: '',
    //picture: Path2D,
    inStock: '',
    outStock: '',
    comments: ''
    }
  }

  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('Jobs').add(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'JOBS');
  }
}
