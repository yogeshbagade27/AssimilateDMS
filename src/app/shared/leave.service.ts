import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  leaveData : any[] = [{'id':'1','leaveType': 'Sick Leave', 'leaveDescription': 'Cough'},{'id':'2','leaveType': 'Casual Leave', 
  'leaveDescription': 'For vehicle or transportation problems.'}, {'id':'3', 'leaveType': 'Maternity Leave', 'leaveDescription': 'a woman takes a break from work because she is about to have, or has just had, a baby'}];
 
  constructor() { }

  getAllLeaves()
  {
    return this.leaveData;
  }
  
}
