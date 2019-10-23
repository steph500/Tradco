import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }

  getJobs() {
    let jobList = [
      { id: 1, name:'Job 1:' },
      { id: 2, name:'Job 2:' },
      { id: 3, name:'Job 3:' },
      { id: 4, name:'Job 4:' },
      { id: 5, name:'Job 5:' },
      { id: 6, name:'Job 5:' }
    ]

    return jobList ;
  }
}
