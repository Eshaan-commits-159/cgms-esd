import { Component, OnInit } from '@angular/core';
import {Complaint} from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ComplaintService]
})
export class DashboardComponent implements OnInit {
  complaint?: Complaint;
  complaints?: Complaint[];
  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
  	this.getComplaints();
  }

  getComplaints(){
  	this.complaintService.getComplaints()
  	.subscribe((complaints: Complaint[]) =>
  		this.complaints = complaints
  	);
  }

}
