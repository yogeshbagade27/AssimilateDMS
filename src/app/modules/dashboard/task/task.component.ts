import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskData: any;

  constructor(private taskService : TaskService) { }

  ngOnInit() {

    this.taskData =this.taskService.taskData;
  


  }

}
