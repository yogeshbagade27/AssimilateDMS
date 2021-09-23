import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //   daysData : any = [];
  //  timeTracker : any = moment();

    
  constructor() { }

  ngOnInit(): void {
  
  }


 

  //  getDays(e: number) {
  //   var days = [];
  //   if (e == 0) {   
  //       this.timeTracker = moment();
  //   } else {
  //       this.timeTracker.add(e, 'weeks');
  //   }

    // Find start and end of week
//     var startOfWeek= this.timeTracker.clone().startOf('isoWeek');
//     var endOfWeek = this.timeTracker.clone().endOf('isoWeek');

//      days = [];
//     var day = startOfWeek;

//     while (day.isSameOrBefore(endOfWeek)) {
//        days.push(day.toDate());
//         day = day.add(1, 'days');
//     }

//    return days;
// }

//  displayPrevWeek() {            
//    this.daysData = this.getDays(-1)
//    console.log(JSON.stringify(this.daysData));
// } 
// displayCurrentWeek() {      
//   this.daysData = this.getDays(0);
// } 
//  displayNextWeek() {    
//   this.daysData = this.getDays(1);
// }

  
}
