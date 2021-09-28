import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

currentYear:any;


  constructor() { }
  
  ngOnInit(): void {
    this.currentYear=moment().year(); 
  }

  

}
