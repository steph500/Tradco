import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }

  getJobs() {
    return[
      {
        name:'Job 1:'
      },
      {
        name:'Job 2:'
      },
      {
        name:'Job 3:'
      },
      {
        name:'Job 4:'
      },
      {
        name:'Job 5:'
      },
      {
        name:'Job 5:'
      }
    ]
  }
}
