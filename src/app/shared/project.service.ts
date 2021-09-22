import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectData : any[] = [{'id':'1','projectName': 'ATDMS'},{'id':'2','projectName': 'Anaha', 
}, {'id':'3', 'projectName': '360 Vision'}];


  constructor() { }
}
