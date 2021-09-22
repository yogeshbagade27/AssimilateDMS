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

  taskData:any;
  days : any = [];
  projectData : any;

  constructor(private taskService : TaskService , private router : Router , private projectService : ProjectService) { 

  }
  

  ngOnInit(): void {

    this.getCurrentWeekDays();
    this.taskData= this.taskService.taskData;
    this.projectData = this.projectService.projectData;
    console.log(this.taskData);
   
    
    
  }
 

    getCurrentWeekDays = () => {
    // const weekStart = moment().startOf('week');

    const weekStart = moment().startOf('week').weekday(1);
  
    
    for (let i = 0; i <= 6; i++) {
      this.days.push(moment(weekStart).add(i, 'days'));
    }
  }

  addLeave()
  {
      this.router.navigate(["/timesheet/leave"])
  }
  
  addTask()
  {
    this.router.navigateByUrl("/timesheet/task")
  }
  
}
