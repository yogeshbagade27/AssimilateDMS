import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ProjectService } from 'src/app/shared/project.service';
import { TaskService } from 'src/app/shared/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  

  weekStart:any;
  weekEnd : any;
  model: any = {};
  Swal:any;
  taskData:any;
  days : any = [];
  projectData : any;
  daysData : any = [];
  timeTracker : any = moment();


  timesheetForm = this.fb.group({
    project: ['' , Validators.required],
    task: ['' , Validators.required],
    monday: ['', [Validators.required, Validators.pattern("^[0-9]*$") ,Validators.min(0), Validators.max(16)]],
    tuesday: ['', [Validators.required, Validators.pattern("^[0-9]*$") , Validators.min(0), Validators.max(16) ]],
    wednesday: ['', [Validators.required, Validators.pattern("^[0-9]*$") , Validators.min(0), Validators.max(16)]],
    thursday: ['', [Validators.required, Validators.pattern("^[0-9]*$") , Validators.min(0), Validators.max(16)]], 
    friday: ['', [Validators.required, Validators.pattern("^[0-9]*$") , Validators.min(0), Validators.max(16)]],
    saturday: ['', [Validators.required, Validators.pattern("^[0-9]*$") , Validators.min(0), Validators.max(16)]],
    sunday: ['', [Validators.required, Validators.pattern("^[0-9]*$") , Validators.min(0), Validators.max(16)]],
  });


  constructor(private taskService : TaskService , private router : Router ,
     private projectService : ProjectService , private fb: FormBuilder) { 
   
   
  }
  
 
  
  ngOnInit(): void {

    this.getCurrentWeekDays();
    this.displayCurrentWeek();
    this.getDates();
    this.taskData= this.taskService.taskData;
    this.projectData = this.projectService.projectData;
    

  }
 

  onSubmitTimesheetForm()
  {
        if(this.timesheetForm.valid)
        {
          console.log(this.timesheetForm.value);
        }
        else
        {
          // console.log(this.timesheetForm);

          let keys = Object.keys(this.timesheetForm.controls);

            keys.filter(data => {
                let control = this.timesheetForm.controls[data];

                if(control.errors != null)
                {
                    control.markAsTouched();
                }
            })
        }
  }
 onReset(){

      this.timesheetForm.reset({
          project : new FormControl(0) ,
          task :new FormControl(0)
         });
 }

 getDates()
 {
  let currentDate = moment();
   this.weekStart = currentDate.clone().startOf('week').weekday(1);
   this.weekEnd = currentDate.clone().endOf('week');
 }
   

  get f(){
    return this.timesheetForm.controls;
  }
  get fv(){
    return this.timesheetForm.value;
  }
 

  getDays(e: number) {
    var days = [];
    if (e == 0) {   
        this.timeTracker = moment();
    } else {
        this.timeTracker.add(e, 'weeks');
    }

    // Find start and end of week
    var startOfWeek= this.timeTracker.clone("dddd Do MMMM YYYY").startOf('isoWeek');
    var endOfWeek = this.timeTracker.clone("dddd Do MMMM YYYY").endOf('isoWeek');
    
     days = [];
    var day = startOfWeek;

    while (day.isSameOrBefore(endOfWeek)) {
       days.push(day.toDate());
        day = day.add(1, 'days');
    }

   return days;
}

 displayPrevWeek() { 
 
  Swal.fire({  
    title: 'Do you want to go previous week',  
    showDenyButton: true,  
    confirmButtonText: `Yes`,  
    denyButtonText: `Cancel`,
  }).then((result) => {  
    /* Read more about isConfirmed, isDenied below */  
      if (result.isConfirmed) {    
        Swal.fire('Ok!', '', 'success') 
      
          this.timesheetForm.reset({
            project : new FormControl(0) ,
          task :new FormControl(0)
           });
     
        this.daysData = this.getDays(-1) 
      } else if (result.isDenied) {    
        Swal.fire('Sorry', '', 'info')  
     }
  });
   
  
   
} 

displayCurrentWeek() {      
  this.daysData = this.getDays(0);
  console.log(this.daysData);
} 

 displayNextWeek() {   
  
  Swal.fire({  
    title: 'Do you want to go next week',  
    showDenyButton: true,  
    confirmButtonText: `Yes`,  
    denyButtonText: `Cancel`,
  }).then((result) => {  
    /* Read more about isConfirmed, isDenied below */  
      if (result.isConfirmed) {    
        Swal.fire('Ok!', '', 'success') 
      
          this.timesheetForm.reset({
            project : new FormControl(0) ,
          task :new FormControl(0)
           });
     
           this.daysData = this.getDays(1);
      } else if (result.isDenied) {    
        Swal.fire('Sorry', '', 'info')  
     }
  });
  
  
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
