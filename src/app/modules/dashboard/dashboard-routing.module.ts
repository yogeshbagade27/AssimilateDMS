import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveComponent } from './leave/leave.component';
import { TaskComponent } from './task/task.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
    {path : '' , component : DashboardComponent ,
      children : [
          
          {path : 'timesheet' , component : TimesheetComponent},
          {path : 'task' , component : TaskComponent},
          {path : 'leave' , component : LeaveComponent}
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
