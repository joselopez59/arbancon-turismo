import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})

export class CalendarPage implements OnInit {

  // dateRange: { from: string; to: string; };
  // type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  // optionsRange: CalendarComponentOptions = {
  //   pickMode: 'range'
  // };

  date: {
    from: string
    to: string
  } = {
    from: '2018-06-28',
    to: '2018-06-30'
  };
  
  
  
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  

  constructor() {}

  ngOnInit(){}
}
