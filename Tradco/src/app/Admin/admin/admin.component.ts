import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs.service';
import { job } from 'src/app/jobs.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  list: job[];
  constructor(
    private service: JobsService,
    private firestore:AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
    this.service.getJobs().subscribe(actionArray=>{
      this.list = actionArray.map(item =>{
        return{
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as job;
      })
    })
  }

  onSubmit(form:NgForm){
    let data = form.value;
    this.firestore.collection('Jobs').add(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully', 'JOBS');
  }

  onDelete(id: string) {
    if(confirm("Are you sure you want to delete this record?")) {
      this.firestore.doc('Jobs/' + id ).delete();
      this.toastr.warning('Deleated successfully', 'JOB RECORD')
    }
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

}
