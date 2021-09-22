import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TaskComponent } from './task/task.component';
import { LeaveComponent } from './leave/leave.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TimesheetComponent,
    TaskComponent,
    LeaveComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
