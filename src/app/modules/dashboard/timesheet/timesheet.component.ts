import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ProjectService } from 'src/app/shared/project.service';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  model: any = {};

  taskData:any;
  days : any = [];
  projectData : any;
  daysData : any = [];
  timeTracker : any = moment();

  constructor(private taskService : TaskService , private router : Router , private projectService : ProjectService) { 

  }
  

  ngOnInit(): void {

    this.getCurrentWeekDays();
    this.displayCurrentWeek();
    this.taskData= this.taskService.taskData;
    this.projectData = this.projectService.projectData;
    
   
    
    
  }
  getDays(e: number) {
    var days = [];
    if (e == 0) {   
        this.timeTracker = moment();
    } else {
        this.timeTracker.add(e, 'weeks');
    }

    // Find start and end of week
    var startOfWeek= this.timeTracker.clone().startOf('isoWeek');
    var endOfWeek = this.timeTracker.clone().endOf('isoWeek');

     days = [];
    var day = startOfWeek;

    while (day.isSameOrBefore(endOfWeek)) {
       days.push(day.toDate());
        day = day.add(1, 'days');
    }

   return days;
}

 displayPrevWeek() {            
   this.daysData = this.getDays(-1)
   
} 
displayCurrentWeek() {      
  this.daysData = this.getDays(0);
} 
 displayNextWeek() {    
  this.daysData = this.getDays(1);
}
 

getCurrentWeekDays = () => {
    // const weekStart = moment().startOf('week');

    const weekStart = moment().startOf('week').weekday(1);
  
    
    for (let i = 0; i <= 6; i++) {
      this.days.push(moment(weekStart).add(i, 'days'));
    }
  }

  // addLeave()
  // {
  //     this.router.navigate(["/timesheet/leave"])
  // }
  
  // addTask()
  // {
  //   this.router.navigateByUrl("/timesheet/task")
  // }
  
}
