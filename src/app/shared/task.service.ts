import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskData : any[] = [{'id':'1','taskType': 'Development'},{'id':'2','taskType': 'Testing', 
}, {'id':'3', 'taskType': 'Meeting'}];

  constructor() { }
  
}
