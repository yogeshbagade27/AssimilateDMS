import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/shared/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {

  leaveData : any;
  

  constructor( private leave : LeaveService) { }

  ngOnInit() {
    this.getAllLeaves();
  }

  getAllLeaves()
  {
      this.leaveData = this.leave.leaveData;
      console.log(this.leaveData);

  }

}
