import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Complaint} from './complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) { }
  getComplaints(): Observable<Complaint[]>{
  	return this.http.get<Complaint[]>('http://localhost:3000/api/complaints');
  }
}
