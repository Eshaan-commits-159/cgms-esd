import { Component, OnInit } from '@angular/core';
import {Complaint} from '../complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css'],
  providers: [ComplaintService]
})
export class ComplaintComponent implements OnInit {
  complaint?: Complaint;
  complaints?: Complaint[];
  constructor(private complaintService: ComplaintService) { }

  ngOnInit(): void {
  	
  }

  

}
