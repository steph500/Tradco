import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { job } from './jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

formData: job;
  constructor(private http: HttpClient) { }

}
 